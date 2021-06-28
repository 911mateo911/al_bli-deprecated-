import '../styles/globals.css'
import Navbar from '../components/navbar/navbar'
import { UserProvider } from '@auth0/nextjs-auth0';
import { FlashMsgProvider } from '../components/contexts/flashMsgs.context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Navbar />
        <FlashMsgProvider>
          <Component {...pageProps} />
        </FlashMsgProvider>
      </UserProvider>
    </>
  )
}

export default MyApp
