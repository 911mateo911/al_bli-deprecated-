import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/index/cta.styles'
import rocket from '../../public/rocket.png'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { FlashMsgContext, FlashDispatchContext } from '../contexts/flashMsgs.context'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(styles)

export default function Cta() {
    const classes = useStyles()
    const snackbar = useContext(FlashMsgContext)
    const dispatch = useContext(FlashDispatchContext)
    const { src: rocketSrc } = rocket
    return (
        <>
            {snackbar.open && (
                <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => dispatch({ type: 'hideSnackbar' })}>
                    <Alert onClose={() => dispatch({ type: 'hideSnackbar' })} severity={snackbar.message}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            )}
            <div className={classes.root} >
                <LazyLoadImage
                    className={classes.img}
                    src={rocketSrc}
                />
                <span className={classes.cta} >
                    <h2 className={classes.h2} >Jepi nje shtytje portofolit tend!</h2>
                    <h4 className={classes.h4} >Mos i flak tutje sendet qe nuk te nevojiten,
                        me mire, tregtoji ketu!</h4>
                    <Link href='/produkt/shto' >
                        <a className={classes.shit} >Shit produktin e pare</a>
                    </Link>
                </span>
            </div>
        </>
    )
}
