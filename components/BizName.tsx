import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

type BizNameProps = {
  bizId: string;
};

function BizName({ bizId }: BizNameProps) {
  const [user] = useAuthState(getAuth());
  const bizRef = user
    ? ref(getDatabase(), `users/${user.uid}/businesses/${bizId}`)
    : null;
  const [snapshots, loading, error] = useObject(bizRef);
  let bizName: string | undefined = undefined;
  let deleted = false;
  if (!loading && snapshots) {
    bizName = snapshots.val()?.name;
    deleted = snapshots.val()?.deleted;
  }
  return <>{`${bizName}${deleted ? "(削除済み)" : ""}` || "Loading name..."}</>;
}

export default BizName;
