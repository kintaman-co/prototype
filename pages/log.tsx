import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicLog } from "../components/plasmic/easytime/PlasmicLog";
import { useList } from "react-firebase-hooks/database";
import React, { ReactNode } from "react";
import BizName from "../components/BizName";
import { formatDate, formatDuration, padZero } from "../utils/date";
import LogRecord from "../components/LogRecord";

function Log() {
  const [user] = useAuthState(firebase.auth());
  const recRef = user
    ? firebase.database().ref(`users/${user.uid}/records`)
    : null;

  const [snapshots, loading, error] = useList(recRef);
  const content = snapshots?.reduce((acc, cur, idx) => {
    const val = cur.val();
    if (!val) {
      return acc;
    }
    const diff = val.end - val.start;
    acc.push(
      <LogRecord
        biz={<BizName bizId={val.bizId} />}
        key={cur.key}
        recId={cur.key || undefined}
        start={formatDate(val.start)}
        end={formatDate(val.end)}
        duration={formatDuration(diff)}
        report={val.report || ""}
      />
    );
    return acc;
  }, [] as ReactNode[]);
  return (
    <PlasmicLog>
      {!loading && !error && snapshots ? (
        <>
          <LogRecord header />
          {content}
        </>
      ) : undefined}
    </PlasmicLog>
  );
}

export default Log;
