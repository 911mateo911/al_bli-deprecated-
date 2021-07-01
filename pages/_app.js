import '../styles/globals.css'
import { Provider } from "next-auth/client"
import Navbar from '../components/navbar/navbar'
import { getSession } from "next-auth/client"
import { FlashMsgProvider } from '../components/contexts/flashMsgs.context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session} >
        <Navbar />
        <FlashMsgProvider>
          <Component {...pageProps} />
        </FlashMsgProvider>
      </Provider>
    </>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}

export default MyApp
