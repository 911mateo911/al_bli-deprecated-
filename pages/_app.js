import '../styles/globals.css'
import { Provider } from "next-auth/client"
import Navbar from '../components/navbar/navbar'
import { FlashMsgProvider } from '../components/contexts/flashMsgs.context'
import Snackbar from '../components/newProduct/Snackbar'
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session} >
        <FlashMsgProvider>
          <Navbar />
          <Component {...pageProps} />
          <Snackbar />
        </FlashMsgProvider>
      </Provider>
    </>
  )
}

export default MyApp
