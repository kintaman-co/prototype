import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicLog } from "../components/plasmic/easytime/PlasmicLog";
import { useList } from "react-firebase-hooks/database";
import React, { ReactNode, useState } from "react";
import BizName from "../components/BizName";
import {
  dateToMinstamp,
  formatDate,
  formatDuration,
  padZero,
} from "../utils/date";
import LogRecord from "../components/LogRecord";
import router from "next/router";
import { exportToCsv } from "../utils/csv";

function Log() {
  const [user] = useAuthState(firebase.auth());
  const recRef = user
    ? firebase.database().ref(`users/${user.uid}/records`)
    : null;

  const [snapshots, loading, error] = useList(recRef);

  const initialDate = dateToMinstamp(new Date());
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(initialDate);
  const [biz, setBiz] = useState<string | null>("all");

  let totalDuration = 0;
  const content = snapshots?.reduce((acc, cur) => {
    const val = cur.val();
    if (!val) {
      return acc;
    }

    if (start > val.end || val.end > end) {
      return acc;
    }
    if (biz !== "all" && biz !== val.bizId) {
      return acc;
    }

    const diff = val.end - val.start;
    totalDuration += diff;
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

  const exportCsv = () => {
    const csv = snapshots?.reduce(
      (acc, cur) => {
        const val = cur.val();
        if (!val) {
          return acc;
        }

        if (start > val.end || val.end > end) {
          return acc;
        }
        if (biz !== "all" && biz !== val.biz) {
          return acc;
        }

        acc.push([val.bizId, val.start, val.end, val.report]);
        return acc;
      },
      [["bizId", "start_minstamp", "end_minstamp", "report"]]
    );
    if (!csv) {
      return;
    }
    exportToCsv("export.csv", csv);
  };
  return (
    <PlasmicLog
      createNew={{
        onClick() {
          router.push("/log/new");
        },
      }}
      exportCsv={{
        onClick: exportCsv,
      }}
      totalDuration={formatDuration(totalDuration)}
      start={{
        value: start,
        onChange: setStart,
      }}
      end={{
        value: end,
        onChange: setEnd,
      }}
      biz={{
        value: biz,
        onChange: setBiz,
      }}
    >
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
