import "../styles/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AuthProvider } from "../auth/useAuth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>IAESTE Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
