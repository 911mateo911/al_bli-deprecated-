import '../styles/globals.css'
import { Provider } from "next-auth/client"
import Navbar from '../components/navbar/navbar'
import { FlashMsgProvider } from '../components/contexts/flashMsgs.context'
import Snackbar from '../components/newProduct/Snackbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session} >
        <Navbar />
        <FlashMsgProvider>
          <Component {...pageProps} />
          <Snackbar />
        </FlashMsgProvider>
      </Provider>
    </>
  )
}

export default MyApp
