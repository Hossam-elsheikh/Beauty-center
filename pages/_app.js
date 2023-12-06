import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import Head from "next/head";
import fav from "../public/fav.svg";
import { useRouter } from "next/router";

import AggContextProvider from "../components/Context/aggContext";
const MyApp = ({ Component, pagesProps }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={fav.src} />

      </Head>
      <AggContextProvider>
        <Layout>
          <Component {...pagesProps} />
        </Layout>
      </AggContextProvider>
    </>
  );
};

export default MyApp;
