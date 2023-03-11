import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList, useObject } from "react-firebase-hooks/database";
import {
  PlasmicWorking,
  DefaultWorkingProps,
} from "./plasmic/easytime/PlasmicWorking";
import { DTValues } from "./DtInput";
import BizName from "./BizName";
import { dateToMinstamp, formatDuration, minstampToDate } from "../utils/date";
import { getAuth } from "@firebase/auth";
import { getDatabase, push, ref, remove, update } from "@firebase/database";

interface WorkingProps extends DefaultWorkingProps {}

function Working(props: WorkingProps) {
  const [user] = useAuthState(getAuth());
  const userRef = user ? ref(getDatabase(), `users/${user.uid}`) : null;
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
  const uid = getAuth().currentUser?.uid;
  const userRef = ref(getDatabase(), `users/${uid}`);
  // const newRec = userRef.child("records").push().key;
  // rewrite newRec to use firebase v9
  const newRec = push(ref(getDatabase(), `users/${uid}/records`)).key;
  update(userRef, {
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
  const uid = getAuth().currentUser?.uid;
  const pendRef = ref(getDatabase(), `users/${uid}/pending`);
  remove(pendRef);
}
export default Working;
