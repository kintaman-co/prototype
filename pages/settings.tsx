import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useList, useObjectVal } from "react-firebase-hooks/database";
import React from "react";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicSettings } from "../components/plasmic/easytime/PlasmicSettings";
import BizItem from "../components/BizItem";
import { useRouter } from "next/router";

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
    if (e.code === "auth/popup-blocked") {
      alert("ポップアップがブロックされています。");
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
    if (e.code === "auth/popup-blocked") {
      alert("ポップアップがブロックされています。");
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
  const router = useRouter();

  const [user] = useAuthState(firebase.auth());
  const bizRef = firebase.database().ref(`users/${user!.uid}/businesses`);
  const userRef = firebase.database().ref(`users/${user!.uid}/info`);

  const [snapshots, loading, error] = useList(bizRef);
  const [userSnapshot, userLoading, userError] = useObjectVal(userRef);
  return (
    <PlasmicSettings
      bizList={snapshots
        ?.filter((biz) => !biz.val().deleted)
        .map((biz) => (
          <BizItem key={biz.key} id={biz.key || ""}>
            {biz.val().name}
          </BizItem>
        ))}
      addBiz={{
        onClick() {
          const key = bizRef?.push().key;
          if (key) {
            router.push(`/biz/${key}`);
          }
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
      name={{
        value: userSnapshot?.name || "",
        onChange: (e) => {
          userRef.update({ name: e.target.value });
        },
      }}
      zipcode={{
        value: userSnapshot?.zipcode || "",
        onChange: (e) => {
          userRef.update({ zipcode: e.target.value });
        },
      }}
      address={{
        value: userSnapshot?.address || "",
        onChange: (e) => {
          userRef.update({ address: e.target.value });
        },
      }}
      bank={{
        value: userSnapshot?.bank || "",
        onChange: (e) => {
          userRef.update({ bank: e.target.value });
        },
      }}
    />
  );
}

export default Settings;
