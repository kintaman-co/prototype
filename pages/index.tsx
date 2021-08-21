import firebase from "firebase/app";
import "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/easytime/PlasmicHomepage";

function Homepage() {
  const [user] = useAuthState(firebase.auth());
  const userRef = user
    ? firebase.database().ref(`users/${user.uid}/pending`)
    : null;
  const [snapshots, loading, error] = useObject(userRef);
  const isWorking = !error && !loading && snapshots?.val() != null;

  return <PlasmicHomepage isWorking={isWorking} />;
}

export default Homepage;
