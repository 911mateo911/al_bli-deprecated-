import dynamic from 'next/dynamic'
import { makeStyles } from "@material-ui/core/styles"
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
    return (
        <div className={classes.root} >
            <RegisterFormProvider>
                <RegisterPageForm />
            </RegisterFormProvider>
        </div>
    )
}