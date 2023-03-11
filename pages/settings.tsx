import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useList, useObjectVal } from "react-firebase-hooks/database";
import React from "react";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicSettings } from "../components/plasmic/easytime/PlasmicSettings";
import BizItem from "../components/BizItem";
import { useRouter } from "next/router";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { getDatabase, push, ref, update } from "firebase/database";

/** link current account to google account */
async function linkToGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithRedirect(getAuth(), provider);
    alert("連携しました");
  } catch (e: any) {
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
  const provider = new GithubAuthProvider();
  try {
    await signInWithRedirect(getAuth(), provider);
    alert("連携しました");
  } catch (e: any) {
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

function Settings() {
  const router = useRouter();

  const [user] = useAuthState(getAuth());
  const bizRef = ref(getDatabase(), `users/${user?.uid}/businesses`);
  const userRef = ref(getDatabase(), `users/${user?.uid}/info`);

  const [snapshots, loading, error] = useList(bizRef);
  const [userSnapshot, userLoading, userError] = useObjectVal<{
    name: string;
    zipcode: string;
    address: string;
    bank: string;
  }>(userRef);

  const [signOut, _] = useSignOut(getAuth());
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
          const key = push(bizRef!).key;
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
          update(userRef!, { name: e.target.value });
        },
      }}
      zipcode={{
        value: userSnapshot?.zipcode || "",
        onChange: (e) => {
          update(userRef!, { zipcode: e.target.value });
        },
      }}
      address={{
        value: userSnapshot?.address || "",
        onChange: (e) => {
          update(userRef!, { address: e.target.value });
        },
      }}
      bank={{
        value: userSnapshot?.bank || "",
        onChange: (e) => {
          update(userRef!, { bank: e.target.value });
        },
      }}
    />
  );
}

export default Settings;
