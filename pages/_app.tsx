import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Head from "next/head";

const client = new ApolloClient({
  uri: "https://strapi-drilon7.herokuapp.com/graphql",
});

function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
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
