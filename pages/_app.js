import '../styles/globals.css'
import Navbar from '../components/navbar/navbar'
import { FlashMsgProvider } from '../components/contexts/flashMsgs.context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <FlashMsgProvider>
        <Component {...pageProps} />
      </FlashMsgProvider>
    </>
  )
}

export default MyApp
