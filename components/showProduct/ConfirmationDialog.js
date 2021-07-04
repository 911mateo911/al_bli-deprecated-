import React, { useContext } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { ShowPageDispatch, ShowPageContext } from '../contexts/showPage.context'
import { useRouter } from 'next/router'
import { FlashDispatchContext } from '../contexts/flashMsgs.context'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const flashMessages = {
    success: 'Produkti u fshi me sukses.',
    error: 'Ndodhi nje problem!'
}

export default function ConfirmationDialog({
    productName,
    id
}) {
    const dispatch = useContext(FlashDispatchContext)
    const showPageDispatch = useContext(ShowPageDispatch)
    const showPageContext = useContext(ShowPageContext)
    const router = useRouter()
    async function handleDelete() {
        showPageDispatch({ type: 'closeDialog' })
        showPageDispatch({ type: 'startLoading' })
        const body = { id }
        const req = await axios.post('/api/delete-product', body)
        dispatch({
            type: 'addMessage',
            message: flashMessages[req.data.message],
            severity: req.data.message
        })
        dispatch({ type: 'showSnackbar' })
        console.log(req.data.message)
        if (req.data.message === 'error') showPageDispatch({ type: 'stopLoading' })
        if (req.data.message === 'success') router.replace('/')
    }
    return (
        <Dialog
            open={showPageContext.dialogOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => showPageDispatch({ type: 'closeDialog' })}
        >
            <DialogTitle>A jeni i sigurt?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Jeni duke fshire produktin me emer "{productName}"
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => showPageDispatch({ type: 'closeDialog' })} color="primary">
                    Mbrapa
                </Button>
                <Button onClick={handleDelete} color="primary">
                    Fshije
                </Button>
            </DialogActions>
        </Dialog>
    )
}
