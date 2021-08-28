import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList, useObject } from "react-firebase-hooks/database";
import React from "react";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicSettings } from "../components/plasmic/easytime/PlasmicSettings";
import EditableBizItem from "../components/EditableBizItem";

/** link current account to google account */
async function linkToGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await firebase.auth().currentUser!.linkWithPopup(provider);
    alert("連携しました");
  } catch (e) {
    if (e.code === "auth/provider-already-linked") {
      alert("すでに連携されています。");
      return;
    }
    if (e.code === "auth/credential-already-in-use") {
      alert("すでに別のアカウントとして使用されています。");
      return;
    }
    alert("エラーが発生しました: " + e.code);
  }
}
/** link current account to github account */
async function linkToGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  try {
    await firebase.auth().currentUser!.linkWithPopup(provider);
    alert("連携しました");
  } catch (e) {
    if (e.code === "auth/provider-already-linked") {
      alert("すでに連携されています。");
      return;
    }
    if (e.code === "auth/credential-already-in-use") {
      alert("すでに別のアカウントとして使用されています。");
      return;
    }
    alert("エラーが発生しました: " + e.code);
  }
}
/** sign out from current account */
function signOut() {
  firebase.auth().signOut();
}

function Settings() {
  const [user] = useAuthState(firebase.auth());
  const userRef = user
    ? firebase.database().ref(`users/${user.uid}/businesses`)
    : null;

  const [snapshots, loading, error] = useList(userRef);
  return (
    <PlasmicSettings
      bizList={snapshots
        ?.filter((biz) => !biz.val().deleted)
        .map((biz) => (
          <EditableBizItem
            key={biz.key}
            value={biz.val().name}
            onChange={(val) => {
              biz.ref.update({ name: val });
            }}
            onDeleteClick={() => {
              biz.ref.update({ deleted: true });
            }}
          />
        ))}
      addBiz={{
        onClick() {
          userRef?.push().set({ name: "" });
        },
      }}
      linkToGitHub={{
        onClick: linkToGithub,
      }}
      linkToGoogle={{
        onClick: linkToGoogle,
      }}
      signOut={{
        onClick: signOut,
      }}
    />
  );
}

export default Settings;
