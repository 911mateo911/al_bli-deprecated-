import '../styles/globals.css'
import Footer from '../components/footer/Footer'
import { Provider } from "next-auth/client"
import Navbar from '../components/navbar/navbar'
import { FlashMsgProvider } from '../components/contexts/flashMsgs.context'
import { SearchProvider } from '../components/contexts/search.context'
import Snackbar from '../components/newProduct/Snackbar'
import "swiper/swiper.min.css"
import Head from 'next/head'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session} >
        <Head>
          <link rel="shortcut icon" href='favicon.png' type="image/x-icon" />
          <link rel="apple-touch-icon" type="image/x-icon" sizes="180x180" href="favicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon.png" />
        </Head>
        <FlashMsgProvider>
          <SearchProvider>
            <Navbar />
            <Component {...pageProps} />
            <Snackbar />
            <Footer />
          </SearchProvider>
        </FlashMsgProvider>
      </Provider>
    </>
  )
}

export default MyApp
