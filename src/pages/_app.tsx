import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "components/layouts/Header";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="overflow-x-hidden x-screen">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MyApp;
