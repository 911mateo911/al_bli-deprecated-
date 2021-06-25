import { makeStyles } from "@material-ui/core/styles"
import LoginPage from '../components/login/LoginPage'

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
            <LoginPage />
        </div>
    )
}