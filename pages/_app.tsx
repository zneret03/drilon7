import ApolloClient from "apollo-boost";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { ApolloProvider } from "react-apollo";
import Head from "next/head";

const client = new ApolloClient({
  uri: "https://strapi-drilon7.herokuapp.com/graphql",
});

function App({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        this.navigator.serviceWorker
          .register("/sw.js")
          .then(function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
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
