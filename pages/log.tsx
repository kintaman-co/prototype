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
import LogRecordHeaderItem, {
  Order,
  Topics,
} from "../components/LogRecordHeaderItem";
import { getAuth } from "@firebase/auth";
import { getDatabase, ref } from "@firebase/database";

function Log() {
  const [user] = useAuthState(getAuth());
  const recRef = user ? ref(getDatabase(), `users/${user.uid}/records`) : null;

  const [snapshots, loading, error] = useList(recRef);

  // begin header
  const [sortBy, setSortBy] = useState<[Topics, Order]>(["end", "desc"]);
  const header = (
    <LogRecord
      biz={
        <LogRecordHeaderItem
          topic="biz"
          label="会社名"
          value={sortBy}
          onChange={setSortBy}
        />
      }
      start={
        <LogRecordHeaderItem
          topic="start"
          label="開始時刻"
          value={sortBy}
          onChange={setSortBy}
        />
      }
      end={
        <LogRecordHeaderItem
          topic="end"
          label="終了時刻"
          value={sortBy}
          onChange={setSortBy}
        />
      }
      report={
        <LogRecordHeaderItem
          topic="report"
          label="日報"
          value={sortBy}
          onChange={setSortBy}
        />
      }
      duration={
        <LogRecordHeaderItem
          topic="duration"
          label="労働時間"
          value={sortBy}
          onChange={setSortBy}
        />
      }
    />
  );
  // end header

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(() => dateToMinstamp(new Date()));
  const [biz, setBiz] = useState<string | null>("all");

  let totalDuration = 0;

  const content = snapshots
    ?.reduce((acc, cur) => {
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
      acc.push({
        biz: val.bizId,
        start: val.start,
        end: val.end,
        report: val.report,
        recId: cur.key,
        duration: diff,
      });
      return acc;
    }, [] as Record<Topics | "recId", any>[])
    .sort((a, b) => {
      const coeff = sortBy[1] == "asc" ? 1 : -1;
      if (a[sortBy[0]] < b[sortBy[0]]) {
        return -1 * coeff;
      }
      if (a[sortBy[0]] > b[sortBy[0]]) {
        return 1 * coeff;
      }
      return 0;
    });
  const renderedContent = content?.map((val) => (
    <LogRecord
      biz={<BizName bizId={val.biz} />}
      key={val.recId}
      recId={val.recId}
      start={formatDate(val.start)}
      end={formatDate(val.end)}
      duration={formatDuration(val.duration)}
      report={val.report || ""}
    />
  ));

  const exportCsv = () => {
    const csv = content?.map((e) => [e.recId, e.biz, e.start, e.end, e.report]);
    if (!csv) {
      return;
    }
    exportToCsv("export.csv", [
      ["rec_id", "biz_id", "start_minstamp", "end_minstamp", "report"],
      ...csv,
    ]);
  };

  const setToTheFirstDayOfTheMonth = (monthOffset: number) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + monthOffset;
    setStart(dateToMinstamp(new Date(year, month, 1, 0, 0, 0)));
    setEnd(dateToMinstamp(new Date(year, month + 1, 1, 0, 0, 0)));
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
      curMonth={{
        onClick() {
          setToTheFirstDayOfTheMonth(0);
        },
      }}
      prevMonth={{
        onClick() {
          setToTheFirstDayOfTheMonth(-1);
        },
      }}
    >
      {!loading && !error && snapshots ? (
        <>
          {header}
          {renderedContent}
        </>
      ) : undefined}
    </PlasmicLog>
  );
}

export default Log;
