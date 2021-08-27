import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";

type BizNameProps = {
  bizId: string;
};

function BizName({ bizId }: BizNameProps) {
  const [user] = useAuthState(firebase.auth());
  const bizRef = user
    ? firebase.database().ref(`users/${user.uid}/businesses/${bizId}`)
    : null;
  const [snapshots, loading, error] = useObject(bizRef);
  let bizName: string | undefined = undefined;
  if (!loading && snapshots) {
    bizName = snapshots.val()?.name;
  }
  return <>{bizName || "Loading name..."}</>;
}

export default BizName;
