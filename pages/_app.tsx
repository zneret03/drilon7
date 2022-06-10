import ApolloClient, { InMemoryCache } from "apollo-boost";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApolloProvider } from "react-apollo";
import Head from "next/head";

function App({ Component, pageProps }) {
  const [currentServer, setCurrentServer] = useState(null);

  const DEVELOPMENT_SERVER = "http://localhost:1337/graphql";
  const PRODUCTION_SERVER = "https://strapi-drilon7.herokuapp.com/graphql";
  const LOCALHOST_SERVER = "http://localhost:3000/";

  const SERVER_URL =
    currentServer === LOCALHOST_SERVER ? DEVELOPMENT_SERVER : PRODUCTION_SERVER;

  const client = new ApolloClient({
    uri: SERVER_URL,
    cache: new InMemoryCache(),
  });

  console.log(SERVER_URL);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        this.navigator.serviceWorker
          .register("/sw.js")
          .then(function (registration: { scope: string }) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );

            setCurrentServer(registration.scope);
          }),
          function (err: any) {
            console.log("Service Worker registration failed: ", err);
          };
      });
    }
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>Ian Drilon</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/image/favicon.ico" />
        </Head>
      </div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default App;
