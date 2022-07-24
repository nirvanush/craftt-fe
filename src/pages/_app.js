/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import './index.scss';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'next-themes'
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/fontAwesome5Pro.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/default.css" />
      </Head>

      <Provider store={store}>
        <ThemeProvider defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
        <ToastContainer />
      </Provider>

    </>
  )
}

export default MyApp
