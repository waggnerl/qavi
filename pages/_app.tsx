import type { AppProps } from 'next/app'
import Head from "next/head";
import './style.css'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
