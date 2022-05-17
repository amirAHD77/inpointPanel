import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";

import { makeStore } from "../redux/Store";
import Layout from "../layout/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/bootstrap.css";

const store = makeStore();

function MyApp({ Component, pageProps }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        {router.pathname !== "/" ? (
          <Layout drawerIsOpen={() => setDrawerIsOpen(!drawerIsOpen)}>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
