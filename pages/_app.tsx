import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
