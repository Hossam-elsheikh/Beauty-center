import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import Head from "next/head";
import fav from '../public/fav.svg'
import AggContextProvider from "../components/Context/aggContext";
const MyApp = ({ Component, pagesProps }) => {
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
