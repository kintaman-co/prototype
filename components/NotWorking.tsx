import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList } from "react-firebase-hooks/database";
import {
  PlasmicNotWorking,
  DefaultNotWorkingProps,
} from "./plasmic/easytime/PlasmicNotWorking";
import Button from "./Button";
import { DTValues } from "./DtInput";
import { dateToMinstamp } from "../utils/date";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";

interface NotWorkingProps extends DefaultNotWorkingProps {}

function NotWorking(props: NotWorkingProps) {
  const [user] = useAuthState(getAuth());
  const bizRef = user
    ? ref(getDatabase(), `users/${user.uid}/businesses`)
    : null;
  const [snapshots, loading, error] = useList(bizRef);
  const [time, setTime] = useState<DTValues>({
    hour: "",
    minute: "",
    dayAgo: false,
  });
  return (
    <PlasmicNotWorking
      time={{
        value: time,
        onChange: setTime,
      }}
      bizList={
        loading
          ? undefined
          : snapshots
              ?.filter((e) => !e.val().deleted)
              .map((e) => (
                <Button
                  key={e.key || "NULL"}
                  onClick={() => {
                    bizIn(e.key || "NULL", time);
                  }}
                >
                  {e.val().name}
                </Button>
              ))
      }
    />
  );
}
function bizIn(bizId: string, startTS: DTValues) {
  const date = new Date();
  date.setHours(parseInt(startTS.hour, 10), parseInt(startTS.minute, 10));
  if (startTS.dayAgo) {
    date.setDate(date.getDate() - 1);
  }
  const uid = getAuth().currentUser?.uid;
  const userRef = ref(getDatabase(), `users/${uid}`);
  update(userRef, {
    pending: {
      bizId: bizId,
      start: dateToMinstamp(date),
    },
  });
}
export default NotWorking;
