import { makeStyles } from "@material-ui/core/styles"
import dynamic from 'next/dynamic'

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
    return (
        <div className={classes.root} >
            <LoginPageForm />
        </div>
    )
}