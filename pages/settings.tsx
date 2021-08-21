import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList, useObject } from "react-firebase-hooks/database";
import React from "react";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicSettings } from "../components/plasmic/easytime/PlasmicSettings";
import EditableBizItem from "../components/EditableBizItem";

function Settings() {
  const [user] = useAuthState(firebase.auth());
  const userRef = user
    ? firebase.database().ref(`users/${user.uid}/businesses`)
    : null;

  const [snapshots, loading, error] = useList(userRef);
  return (
    <PlasmicSettings
      bizList={snapshots?.map((biz) => (
        <EditableBizItem
          key={biz.key}
          value={biz.val().name}
          onChange={(val) => {
            biz.ref.update({ name: val });
          }}
          onDeleteClick={() => {
            biz.ref.remove();
          }}
        />
      ))}
      addBiz={{
        onClick() {
          userRef?.push().set({ name: "" });
        },
      }}
    />
  );
}

export default Settings;
