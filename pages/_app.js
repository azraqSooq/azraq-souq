import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <html  dir="rtl" lang="ar" >
        <Head>
          <link rel="stylesheet" href="//static.hsoubcdn.com/assets/fonts/css/NotoArabic.css" media="all" />
          
        </Head>
        <Component {...pageProps} />
      </html>

    </>
  )
}

export default MyApp
