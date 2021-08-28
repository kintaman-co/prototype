import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicSignin } from "../components/plasmic/easytime/PlasmicSignin";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

/** sign in with google account */
function signinWithGoogle() {
  firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

/** sign in with github account */
function signinWithGithub() {
  firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider());
}

/** sign in as anonymous */
function signinAnonymously() {
  if (
    confirm(`Are you sure you want to sign in anonymously?
You can sign in with your email address or social media account later.`)
  ) {
    firebase.auth().signInAnonymously();
  }
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
      google={{
        onClick: signinWithGoogle,
      }}
      github={{
        onClick: signinWithGithub,
      }}
      anonymous={{
        onClick: signinAnonymously,
      }}
    />
  );
}

export default Signin;
