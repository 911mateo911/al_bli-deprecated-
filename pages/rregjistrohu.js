import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/client'
import { makeStyles } from "@material-ui/core/styles"
import Loader from '../components/Loader'
import infinity from '../public/infinity.svg'
import { RegisterFormProvider } from '../components/contexts/registerForm.context'

const RegisterPageForm = dynamic(
    () => import('../components/register/RegisterPage'),
    { ssr: false }
)

const styles = theme => ({
    root: {
        marginTop: '70px'
    }
})

const useStyles = makeStyles(styles)

export default function Rregjistrohu() {
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
            <RegisterFormProvider>
                <RegisterPageForm isLoggedIn={session} />
            </RegisterFormProvider>
        </div>
    )
}