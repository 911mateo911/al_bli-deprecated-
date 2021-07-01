import { makeStyles } from "@material-ui/core/styles"
import dynamic from 'next/dynamic'
import Loader from '../components/Loader'
import infinity from '../public/infinity.svg'
import { useSession } from "next-auth/client"

const LoginPageForm = dynamic(
    () => import('../components/login/LoginPage'),
    { ssr: false }
)

const styles = theme => ({
    root: {
        marginTop: '70px'
    }
})

const useStyles = makeStyles(styles)

export default function Kycu() {
    const classes = useStyles()
    const [session, loading] = useSession()
    const isLoggedIn = Boolean(session)
    if (loading) {
        return (
            <Loader src={infinity.src} />
        )
    }
    return (
        <div className={classes.root} >
            <LoginPageForm isLoggedIn={session} />
        </div>
    )
}