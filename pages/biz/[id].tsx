import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";
import React from "react";
import { ScreenVariantProvider } from "../../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicEditBiz } from "../../components/plasmic/easytime/PlasmicEditBiz";
import { useRouter } from "next/router";
import { getDatabase, ref, update } from "firebase/database";
import { getAuth } from "@firebase/auth";

function EditBiz() {
  const router = useRouter();
  const id = router.query.id;
  const [user] = useAuthState(getAuth());
  const bizRef = user
    ? ref(getDatabase(), `users/${user.uid}/businesses/${id}`)
    : null;
  const [biz, loading, error] = useObjectVal<{
    name: string;
    feePerHr: string;
    recipient: string;
    vatRate: string;
    topic: string;
    isIndividual: boolean;
    deleted: boolean;
  }>(bizRef);

  return (
    <PlasmicEditBiz
      bizName={{
        value: biz?.name,
        onChange: (e) => {
          update(bizRef!, { name: e.target.value });
        },
      }}
      feePerHr={{
        value: biz?.feePerHr,
        onChange: (e) => {
          const val = e.target.value;
          if (parseInt(val, 10).toString() !== val) {
            return;
          }
          update(bizRef!, { feePerHr: val });
        },
      }}
      recipient={{
        value: biz?.recipient,
        onChange: (e) => {
          update(bizRef!, { recipient: e.target.value });
        },
      }}
      vatRate={{
        value: biz?.vatRate,
        onChange: (e) => {
          const val = e.target.value;
          if (parseInt(val, 10).toString() !== val) {
            return;
          }
          update(bizRef!, { vatRate: val });
        },
      }}
      topic={{
        value: biz?.topic,
        onChange: (e) => {
          update(bizRef!, { topic: e.target.value });
        },
      }}
      isIndividual={{
        isChecked: !!biz?.isIndividual,
        onChange: (val) => {
          update(bizRef!, { isIndividual: val });
        },
      }}
      deleted={!!biz?.deleted}
      deleteBiz={{
        onClick: () =>
          update(bizRef!, {
            deleted: true,
          }),
      }}
      restoreDeletion={{
        onClick: () =>
          update(bizRef!, {
            deleted: false,
          }),
      }}
    />
  );
}

export default EditBiz;
