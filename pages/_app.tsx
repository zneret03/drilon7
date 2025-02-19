import React, { Fragment } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Head from "next/head"

function App({ Component, pageProps }) {


  return (
    <Fragment>
      <div>
        <Head>
          <title>Ian Drilon</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/image/favicon.ico" />
        </Head>
      </div>
        <Component {...pageProps} />
    </Fragment>
  )
}

export default App
