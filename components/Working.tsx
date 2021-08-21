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

interface WorkingProps extends DefaultWorkingProps {}

function Working(props: WorkingProps) {
  const [user] = useAuthState(firebase.auth());
  const userRef = user ? firebase.database().ref(`users/${user.uid}`) : null;
  const [snapshots, loading, error] = useObject(userRef);
  const start = new Date(snapshots?.val()?.pending?.start * 1000);
  const curBizId = snapshots?.val()?.pending?.bizId;
  const curBizRef = curBizId ? userRef!.child(`businesses/${curBizId}`) : null;
  const [curBizSnapshots, curBizLoading, curBizError] = useObject(curBizRef);
  const [time, setTime] = useState<[string, string]>(() => {
    const now = new Date();
    return [
      now.getHours().toString(),
      ("0" + now.getMinutes().toString()).slice(-2),
    ];
  });
  return (
    <PlasmicWorking
      start={`${
        start.getMonth() + 1
      }/${start.getDate()} ${start.getHours()}:${start.getMinutes()}`}
      time={{
        value: time,
        onChange: setTime,
      }}
      curBiz={curBizSnapshots?.val()?.name}
      out={{
        onClick() {
          const pend = snapshots?.val().pending;
          if (!pend) return;
          bizOut(pend.bizId, pend.start, time);
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
function bizOut(bizId: string, startVal: number, endTS: [string, string]) {
  const date = new Date();
  date.setHours(parseInt(endTS[0], 10), parseInt(endTS[1], 10));
  if (new Date().getTime() - 60000 > date.getTime()) {
    date.setDate(date.getDate() + 1);
  }
  const uid = firebase.auth().currentUser?.uid;
  const userRef = firebase.database().ref(`users/${uid}`);
  const newRec = userRef.child("records").push().key;
  userRef.update({
    pending: null,
    [`records/${newRec}`]: {
      bizId,
      start: startVal,
      end: Math.floor(date.getTime() / 1000),
    },
  });
}
function bizCancel() {
  const uid = firebase.auth().currentUser?.uid;
  const pendRef = firebase.database().ref(`users/${uid}/pending`);
  pendRef.remove();
}
export default Working;
