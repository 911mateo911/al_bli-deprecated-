import React, { useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { FlashMsgContext, FlashDispatchContext } from '../contexts/flashMsgs.context'

const styles = theme => ({
    snackbar: {
        marginBottom: '10px !important',
        marginRight: '10px !important'
    }
})

const useStyles = makeStyles(styles)

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarMsg() {
    const classes = useStyles()
    const snackbar = useContext(FlashMsgContext)
    const dispatch = useContext(FlashDispatchContext)
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            className={classes.snackbar}
            open={snackbar.open}
            autoHideDuration={2200}
            onClose={() => dispatch({ type: 'hideSnackbar' })}
        >
            <Alert onClose={() => dispatch({ type: 'hideSnackbar' })} severity={snackbar.severity}>
                {snackbar.message}
            </Alert>
        </Snackbar>
    )
}
