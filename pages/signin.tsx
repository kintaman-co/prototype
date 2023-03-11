import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicSignin } from "../components/plasmic/easytime/PlasmicSignin";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithRedirect,
} from "@firebase/auth";

/** sign in with google account */
function signinWithGoogle() {
  signInWithRedirect(getAuth(), new GoogleAuthProvider());
}

/** sign in with github account */
function signinWithGithub() {
  signInWithRedirect(getAuth(), new GithubAuthProvider());
}

/** sign in as anonymous */
function signinAnonymously() {
  if (
    confirm(`Are you sure you want to sign in anonymously?
You can sign in with your email address or social media account later.`)
  ) {
    signInAnonymously(getAuth());
  }
}

function Signin() {
  const [user, loading, error] = useAuthState(getAuth());
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
