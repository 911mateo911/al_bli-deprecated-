import React, { useContext, memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { Transition } from './ConfirmationDialog'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import IconButton from '@material-ui/core/IconButton'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { ShowPageContext, ShowPageDispatch } from '../contexts/showPage.context'

const styles = theme => ({
    root: {
        minWidth: '200px',
        width: '500px',
        maxWidth: '500px'
    },
    p: {
        fontFamily: 'Lato',
        width: '100%',
        fontWeight: 500,
        margin: '0'
    },
    url: {
        fontFamily: 'Source Sans Pro',
        margin: 0,
        width: '100%',
        fontWeight: 600,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        padding: '8px',
        backgroundColor: '#E5E7EB',
        borderRadius: '2px'
    },
    span: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    copy: {
        margin: '0 0 0 10px'
    }
})

const useStyles = makeStyles(styles)

function ShareDialog({ open, url }) {
    const classes = useStyles()
    const dispatch = useContext(ShowPageDispatch)
    return (
        <Dialog
            TransitionComponent={Transition}
            keepMounted
            classes={{ paper: classes.root }}
            open={open}
            onClose={() => dispatch({ type: 'closeShareDialog' })}
        >
            <DialogTitle>Shperndaj</DialogTitle>
            <DialogContent>
                <p className={classes.p} >Kopjo linkun:</p>
                <span className={classes.span} >
                    <p className={classes.url} >{url}</p>
                    <CopyToClipboard text={url} >
                        <IconButton className={classes.copy} >
                            <FileCopyIcon />
                        </IconButton>
                    </CopyToClipboard>
                </span>
            </DialogContent>
        </Dialog>
    )
}

export default memo(ShareDialog)