import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList, useObjectVal } from "react-firebase-hooks/database";
import React, { useState } from "react";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicInvoice } from "../components/plasmic/easytime/PlasmicInvoice";
import Template from "../components/react-invoice/Template";
import Recipient from "../components/react-invoice/Recipient";
import Total from "../components/react-invoice/Total";
import Sender from "../components/react-invoice/Sender";
import PayTo from "../components/react-invoice/PayTo";
import { dateToMinstamp } from "../utils/date";
import TableRow from "../components/react-invoice/TableRow";
import { SerializableInvoice } from "../utils/types";
import { useRouter } from "next/router";

function Invoice() {
  const [biz, setBiz] = useState<string | null>(null);
  const [memo, setMemo] = useState("");

  const [user] = useAuthState(firebase.auth());
  const bizRef = firebase
    .database()
    .ref(`users/${user?.uid}/businesses/${biz}`);

  const [bizVal, loading, error] = useObjectVal(bizRef);

  const userRef = firebase.database().ref(`users/${user?.uid}/info`);
  const [userVal, userLoading, userError] = useObjectVal(userRef);

  const recRef = firebase.database().ref(`users/${user?.uid}/records`);
  const [recSnaps, recLoading, recError] = useList(recRef);

  const today = new Date();
  const id = "後ほど生成されます";
  const due = new Date(today.getFullYear(), today.getMonth() + 2, 1, 0, 0, 0);
  due.setDate(due.getDate() - 1);

  const start = dateToMinstamp(
    new Date(today.getFullYear(), today.getMonth() - 1, 1, 0, 0, 0)
  );
  const end = dateToMinstamp(
    new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0)
  );
  const duration = parseFloat(
    (
      (recSnaps?.reduce((acc, snap) => {
        const val = snap.val();
        if (!val) {
          return acc;
        }
        if (start > val.end || val.end >= end) {
          return acc;
        }
        if (val.bizId !== biz) {
          return acc;
        }

        const diff = val.end - val.start;
        return acc + diff;
      }, 0) || 0) / 60
    ).toFixed(2)
  );

  const total = bizVal ? duration * bizVal.feePerHr : undefined;

  const invoice = (
    <Template
      title={"請求書"}
      recipient={
        <Recipient
          name={bizVal?.recipient || "超誠覇神Z"}
          individual={!!bizVal?.isIndividual}
        />
      }
      date={today.toLocaleDateString()}
      id={id}
      total={
        <Total
          amount={
            total &&
            total + Math.ceil(parseFloat(bizVal?.vatRate || "0") * 0.01 * total)
          }
          withTax={parseInt(bizVal?.vatRate || "0", 10) !== 0}
          includedTax={
            total &&
            Math.ceil(parseFloat(bizVal?.vatRate || "0") * 0.01 * total)
          }
        />
      }
      sender={
        <Sender
          postNumber={userVal?.zipcode}
          address={userVal?.address}
          name={userVal?.name}
        />
      }
      payTo={<PayTo due={due.toLocaleDateString()}>{userVal?.bank}</PayTo>}
      tableBody={
        <TableRow
          topic={bizVal?.topic}
          price={bizVal?.feePerHr}
          amount={duration}
          total={total}
        />
      }
      memo={memo}
    />
  );

  const router = useRouter();
  const generate = () => {
    const invoice: SerializableInvoice = {
      version: "1",
      type: "invoice",
      recipient: {
        name: bizVal?.recipient || "超誠覇神Z",
        isIndividual: !!bizVal?.isIndividual,
      },
      date: dateToMinstamp(today),
      sender: {
        postNumber: userVal?.zipcode,
        address: userVal?.address,
        name: userVal?.name,
      },
      payTo: {
        due: dateToMinstamp(due),
        bank: userVal?.bank,
      },
      items: [
        {
          topic: bizVal?.topic,
          price: parseInt(bizVal?.feePerHr, 10),
          amount: duration,
        },
      ],
      memo: memo,
      includeVat: parseInt(bizVal?.vatRate || "0", 10) !== 0,
      vatRate: parseFloat(bizVal?.vatRate || "0") * 0.01,
    };
    const invoiceJson = JSON.stringify(invoice);
    router.push({
      pathname: "/invoice/print",
      query: {
        invoice: invoiceJson,
      },
    });
  };

  return (
    <PlasmicInvoice
      biz={{
        value: biz,
        onChange: setBiz,
      }}
      invoice={invoice}
      memo={{
        value: memo,
        onChange(e) {
          setMemo(e.target.value);
        },
      }}
      generate={{
        onClick: generate,
      }}
    />
  );
}

export default Invoice;
