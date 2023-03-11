import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../firebase";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";
import { getAuth } from "@firebase/auth";
function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(getAuth());
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user && router.asPath !== "/signin") {
      router.push("/signin");
    }
  }, [user, router, loading]);
  return (
    <>
      <Head>
        <title>easytime</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
