import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicSignin } from "../components/plasmic/easytime/PlasmicSignin";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function signinWithGoogle() {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function Signin() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  return (
    <PlasmicSignin
      signinButton={{
        onClick: signinWithGoogle,
      }}
    />
  );
}

export default Signin;
