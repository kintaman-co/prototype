import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";
import React from "react";
import { ScreenVariantProvider } from "../../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicEditBiz } from "../../components/plasmic/easytime/PlasmicEditBiz";
import { useRouter } from "next/router";

function EditBiz() {
  const router = useRouter();
  const id = router.query.id;
  const [user] = useAuthState(firebase.auth());
  const bizRef = user
    ? firebase.database().ref(`users/${user.uid}/businesses/${id}`)
    : null;
  const [biz, loading, error] = useObjectVal(bizRef);

  return (
    <PlasmicEditBiz
      bizName={{
        value: biz?.name,
        onChange: (e) => {
          bizRef!.update({ name: e.target.value });
        },
      }}
      feePerHr={{
        value: biz?.feePerHr,
        onChange: (e) => {
          const val = e.target.value;
          if (parseInt(val, 10).toString() !== val) {
            return;
          }
          bizRef!.update({ feePerHr: val });
        },
      }}
      recipient={{
        value: biz?.recipient,
        onChange: (e) => {
          bizRef!.update({ recipient: e.target.value });
        },
      }}
      vatRate={{
        value: biz?.vatRate,
        onChange: (e) => {
          const val = e.target.value;
          if (parseInt(val, 10).toString() !== val) {
            return;
          }
          bizRef!.update({ vatRate: val });
        },
      }}
      topic={{
        value: biz?.topic,
        onChange: (e) => {
          bizRef!.update({ topic: e.target.value });
        },
      }}
      isIndividual={{
        isChecked: !!biz?.isIndividual,
        onChange: (val) => {
          bizRef!.update({ isIndividual: val });
        },
      }}
      deleted={!!biz?.deleted}
      deleteBiz={{
        onClick: () =>
          bizRef!.update({
            deleted: true,
          }),
      }}
      restoreDeletion={{
        onClick: () =>
          bizRef!.update({
            deleted: false,
          }),
      }}
    />
  );
}

export default EditBiz;
