import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList, useObject } from "react-firebase-hooks/database";
import {
  PlasmicWorking,
  DefaultWorkingProps,
} from "./plasmic/easytime/PlasmicWorking";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { DTValues } from "./DtInput";
import BizName from "./BizName";
import { dateToMinstamp, formatDuration, minstampToDate } from "../utils/date";

interface WorkingProps extends DefaultWorkingProps {}

function Working(props: WorkingProps) {
  const [user] = useAuthState(firebase.auth());
  const userRef = user ? firebase.database().ref(`users/${user.uid}`) : null;
  const [snapshots, loading, error] = useObject(userRef);
  const start = minstampToDate(snapshots?.val()?.pending?.start);
  const curBizId = snapshots?.val()?.pending?.bizId;
  const [time, setTime] = useState<DTValues>({
    hour: "",
    minute: "",
    dayAgo: false,
  });
  const [report, setReport] = useState("");
  const diff = dateToMinstamp(new Date()) - dateToMinstamp(start);
  return (
    <PlasmicWorking
      start={`${
        start.getMonth() + 1
      }/${start.getDate()} ${start.getHours()}:${start.getMinutes()}`}
      time={{
        value: time,
        onChange: setTime,
      }}
      curBiz={<BizName bizId={curBizId} />}
      duration={formatDuration(diff)}
      report={{
        value: report,
        onChange: (e) => setReport(e.target.value),
      }}
      out={{
        onClick() {
          const pend = snapshots?.val().pending;
          if (!pend) return;
          bizOut(pend.bizId, pend.start, time, report);
        },
      }}
      cancel={{
        onClick() {
          bizCancel();
        },
      }}
    />
  );
}
function bizOut(
  bizId: string,
  startVal: number,
  endTS: DTValues,
  report: string
) {
  const date = new Date();
  date.setHours(parseInt(endTS.hour, 10), parseInt(endTS.minute, 10));
  if (endTS.dayAgo) {
    date.setDate(date.getDate() - 1);
  }
  const uid = firebase.auth().currentUser?.uid;
  const userRef = firebase.database().ref(`users/${uid}`);
  const newRec = userRef.child("records").push().key;
  userRef.update({
    pending: null,
    [`records/${newRec}`]: {
      bizId,
      start: startVal,
      end: dateToMinstamp(date),
      report,
    },
  });
}
function bizCancel() {
  const uid = firebase.auth().currentUser?.uid;
  const pendRef = firebase.database().ref(`users/${uid}/pending`);
  pendRef.remove();
}
export default Working;
