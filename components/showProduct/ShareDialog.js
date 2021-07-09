import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { Transition } from './ConfirmationDialog'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import IconButton from '@material-ui/core/IconButton'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    ViberShareButton,
    ViberIcon
} from 'react-share'
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
        margin: '10px 0 0 0'
    },
    shareWrap: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 'auto'
    },
    url: {
        fontFamily: 'Source Sans Pro',
        margin: 0,
        width: '100%',
        fontWeight: 600,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
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
    },
    btn: {
        margin: '5px'
    }
})

const useStyles = makeStyles(styles)

export default function ShareDialog({ url, quote }) {
    const classes = useStyles()
    const dispatch = useContext(ShowPageDispatch)
    const state = useContext(ShowPageContext)
    return (
        <Dialog
            TransitionComponent={Transition}
            keepMounted
            classes={{ paper: classes.root }}
            open={state.shareDialogOpen}
            onClose={() => dispatch({ type: 'closeShareDialog' })}
        >
            <DialogTitle>Shperndaj</DialogTitle>
            <DialogContent>
                <div className={classes.shareWrap} >
                    <FacebookShareButton
                        className={classes.btn}
                        url={url}
                        quote={quote}
                    >
                        <FacebookIcon borderRadius={5} size={50} />
                    </FacebookShareButton>
                    <FacebookMessengerShareButton
                        className={classes.btn}
                        appId='alBli'
                        redirectUri={url}
                    >
                        <FacebookMessengerIcon borderRadius={5} size={50} />
                    </FacebookMessengerShareButton>
                    <WhatsappShareButton
                        url={url}
                        title={quote}
                        className={classes.btn}
                    >
                        <WhatsappIcon borderRadius={5} size={50} />
                    </WhatsappShareButton>
                    <ViberShareButton
                        className={classes.btn}
                        url={url}
                        title={quote}
                    >
                        <ViberIcon borderRadius={5} size={50} />
                    </ViberShareButton>
                </div>
                <p className={classes.p} >Ose kopjoni linkun:</p>
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
