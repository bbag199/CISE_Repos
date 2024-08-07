import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import PopulatedNavBar from "../components/PopulatedNavBar";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps){
  return(
    <SessionProvider session={session}>
    <PopulatedNavBar />
    <Component {...pageProps} />
    </SessionProvider>
  )
}
