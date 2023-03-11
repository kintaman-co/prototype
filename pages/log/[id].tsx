import { PlasmicEditLog } from "../../components/plasmic/easytime/PlasmicEditLog";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";
import { dateToMinstamp, padZero } from "../../utils/date";
import BizName from "../../components/BizName";
import BizSelect from "../../components/BizSelect";
import { getAuth } from "@firebase/auth";
import { getDatabase, push, ref, remove, update } from "@firebase/database";

function EditLog() {
  const router = useRouter();
  const id = router.query.id as string;
  const isNew = id === "new";

  const [user] = useAuthState(getAuth());
  const recRef =
    user && !isNew
      ? ref(getDatabase(), `users/${user.uid}/records/${id}`)
      : null;
  const [snapshots, fbLoading, error] = useObject(recRef);
  const [actionLoading, setActionLoading] = useState(false);

  const [bizId, setBizId] = useState<string | null>(null);

  const initialDate = dateToMinstamp(new Date());
  const [startTime, setStartTime] = useState(initialDate);
  const [endTime, setEndTime] = useState(initialDate);

  const [report, setReport] = useState("");

  useEffect(() => {
    const val = snapshots?.val();
    if (!val) {
      return;
    }

    setBizId(val.bizId);
    setStartTime(val.start);
    setEndTime(val.end);
    setReport(val.report || "");
  }, [snapshots]);
  const diff = endTime - startTime;

  const save = async () => {
    const updates = {
      bizId,
      start: startTime,
      end: endTime,
      report: report,
    };
    setActionLoading(true);
    try {
      await update(recRef!, updates);
    } catch (e) {
      console.error(e);
    }
    setActionLoading(false);
    back();
  };
  const createNew = async () => {
    const updates = {
      bizId,
      start: startTime,
      end: endTime,
      report: report,
    };
    setActionLoading(true);
    try {
      await push(ref(getDatabase(), `users/${user!.uid}/records`), updates);
    } catch (e) {
      console.error(e);
    }
    setActionLoading(false);
    back();
  };

  const deleteLog = async () => {
    setActionLoading(true);
    try {
      await remove(recRef!);
    } catch (e) {
      console.error(e);
    }
    setActionLoading(false);
    back();
  };
  const back = () => {
    router.back();
  };

  return (
    <PlasmicEditLog
      loading={fbLoading || actionLoading}
      bizSelect={{
        value: bizId,
        onChange: setBizId,
      }}
      start={{
        value: startTime,
        onChange: setStartTime,
      }}
      end={{
        value: endTime,
        onChange: setEndTime,
      }}
      duration={padZero(Math.floor(diff / 60)) + ":" + padZero(diff % 60)}
      report={{
        value: report,
        onChange: (e) => setReport(e.target.value),
      }}
      save={{
        onClick: isNew ? createNew : save,
      }}
      deleteLog={{
        onClick: isNew ? back : deleteLog,
      }}
      back={{
        onClick: back,
      }}
    />
  );
}

export default EditLog;
