import '../styles/globals.css'
import Navbar from '../components/navbar/navbar'
import { useEffect } from 'react'
import { FlashMsgProvider } from '../components/contexts/flashMsgs.context'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
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
