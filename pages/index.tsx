import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";
import React, { useEffect } from "react";
import { ScreenVariantProvider } from "../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicHomepage } from "../components/plasmic/easytime/PlasmicHomepage";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "@firebase/auth";

function Homepage() {
  const [user] = useAuthState(getAuth());
  const userRef = user ? ref(getDatabase(), `users/${user.uid}/pending`) : null;
  const [snapshots, loading, error] = useObject(userRef);
  const isWorking = !error && !loading && snapshots?.val() != null;

  return <PlasmicHomepage isWorking={isWorking} />;
}

export default Homepage;
