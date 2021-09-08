import { useRouter } from "next/router";
import * as React from "react";
import PayTo from "../../components/react-invoice/PayTo";
import Recipient from "../../components/react-invoice/Recipient";
import Sender from "../../components/react-invoice/Sender";
import TableRow from "../../components/react-invoice/TableRow";
import Template from "../../components/react-invoice/Template";
import Total from "../../components/react-invoice/Total";
import { minstampToDate } from "../../utils/date";
import { SerializableInvoice } from "../../utils/types";
import { ScreenVariantProvider } from "../../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicPrintInvoice } from "../../components/plasmic/easytime/PlasmicPrintInvoice";
import { useEffect } from "react";
import { createHash } from "crypto";
import QRCode from "qrcode.react";

function PrintInvoice() {
  const router = useRouter();
  console.log(router);

  const invJson = router.query.invoice?.toString();
  useEffect(() => {
    if (invJson) {
      try {
        window.print();
      } catch (e) {
        alert(`Error occured while printing: ${e?.message}`);
      }
    }
  }, [invJson]);
  if (!invJson) {
    return <div>No invoice</div>;
  }
  const invoice: SerializableInvoice = JSON.parse(invJson ?? "");
  let title = "";
  if (invoice.type === "invoice") {
    title = "請求書";
  } else if (invoice.type === "receipt") {
    title = "領収書";
  } else if (invoice.type === "estimate") {
    title = "見積書";
  } else {
    title = "不明";
  }

  let total = 0;
  const tableBody = invoice.items.reduce((acc, item) => {
    const subtotal = item.price * item.amount;
    total += subtotal;
    return [
      ...acc,
      <TableRow
        key={item.topic}
        topic={item.topic}
        price={item.price}
        amount={item.amount}
        total={subtotal}
      />,
    ];
  }, [] as React.ReactNode[]);
  let vat = 0;
  total = Math.ceil(total);
  if (invoice.includeVat) {
    vat = Math.ceil(total * invoice.vatRate);
  }
  const sha256OfInvoice = createHash("sha256")
    .update(invJson.toString())
    .digest("base64");

  const template = (
    <Template
      title={title}
      recipient={
        <Recipient
          name={invoice.recipient.name}
          individual={invoice.recipient.isIndividual}
        />
      }
      date={minstampToDate(invoice.date).toLocaleDateString()}
      sender={
        <Sender
          postNumber={invoice.sender.postNumber}
          address={invoice.sender.address}
          name={invoice.sender.name}
        />
      }
      payTo={
        invoice.payTo ? (
          <PayTo due={minstampToDate(invoice.payTo.due).toLocaleDateString()}>
            {invoice.payTo.bank}
          </PayTo>
        ) : (
          <></>
        )
      }
      tableBody={tableBody}
      total={
        <Total
          amount={total + vat}
          withTax={invoice.includeVat}
          includedTax={vat}
          action={invoice.type}
        />
      }
      id={sha256OfInvoice.slice(0, 8)}
      memo={invoice.memo}
      qrCode={<QRCode value={invJson} />}
    />
  );

  return <PlasmicPrintInvoice>{template}</PlasmicPrintInvoice>;
}

export default PrintInvoice;
