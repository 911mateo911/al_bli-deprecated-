import { makeStyles } from "@material-ui/core/styles"
import dynamic from 'next/dynamic'

const SearchPage = dynamic(
    () => import('../components/searchPage/SearchPage'),
    { ssr: false }
)

const styles = theme => ({
    root: {
        marginTop: '70px'
    }
})

const useStyles = makeStyles(styles)

export default function Kerko() {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <SearchPage />
        </div>
    )
}