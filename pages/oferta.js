import caution from '../public/caution.png'
import { makeStyles } from '@material-ui/core/styles'
import Error from '../components/Error'

const styles = theme => ({
    root: {
        marginTop: '70px'
    }
})

const useStyles = makeStyles(styles)

export default function handler() {
    const classes = useStyles()
    return (
        <Error
            src={caution.src}
            h1='Se shpejti...'
            desc='Ofertat vijne se shpejt :) !'
        />
    )
}