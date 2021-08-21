import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList } from "react-firebase-hooks/database";
import {
  PlasmicNotWorking,
  DefaultNotWorkingProps,
} from "./plasmic/easytime/PlasmicNotWorking";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import Button from "./Button";

interface NotWorkingProps extends DefaultNotWorkingProps {}

function NotWorking(props: NotWorkingProps) {
  const [user] = useAuthState(firebase.auth());
  const bizRef = user
    ? firebase.database().ref(`users/${user.uid}/businesses`)
    : null;
  const [snapshots, loading, error] = useList(bizRef);
  const [time, setTime] = useState<[string, string]>(() => {
    const now = new Date();
    return [
      now.getHours().toString(),
      ("0" + now.getMinutes().toString()).slice(-2),
    ];
  });
  return (
    <PlasmicNotWorking
      time={{
        value: time,
        onChange: setTime,
      }}
      bizList={snapshots?.map((e) => (
        <Button
          key={e.key || "NULL"}
          onClick={() => {
            bizIn(e.key || "NULL", time);
          }}
        >
          {e.val().name}
        </Button>
      ))}
    />
  );
}
function bizIn(bizId: string, startTS: [string, string]) {
  const date = new Date();
  date.setHours(parseInt(startTS[0], 10), parseInt(startTS[1], 10));
  if (new Date().getTime() - 60000 > date.getTime()) {
    date.setDate(date.getDate() + 1);
  }
  const uid = firebase.auth().currentUser?.uid;
  const userRef = firebase.database().ref(`users/${uid}`);
  userRef.update({
    pending: {
      bizId: bizId,
      start: Math.floor(date.getTime() / 1000),
    },
  });
}
export default NotWorking;
