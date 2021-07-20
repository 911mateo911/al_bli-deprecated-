import React, { useContext, memo } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { BackDropDispatch } from '../contexts/backdrop.context'
import { ShowPageDispatch, ShowPageContext } from '../contexts/showPage.context'
import { useRouter } from 'next/router'
import { FlashDispatchContext } from '../contexts/flashMsgs.context'

export const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const flashMessages = {
    success: 'Produkti u fshi me sukses.',
    error: 'Ndodhi nje problem!'
}

function ConfirmationDialog({
    productName,
    id
}) {
    const dispatch = useContext(FlashDispatchContext)
    const showPageDispatch = useContext(ShowPageDispatch)
    const showPageContext = useContext(ShowPageContext)
    const backDropDispatch = useContext(BackDropDispatch)
    const router = useRouter()
    async function handleDelete() {
        showPageDispatch({ type: 'closeDialog' })
        backDropDispatch({ type: 'openBackDrop' })
        const body = { id }
        const req = await axios.post('/api/delete-product', body)
        dispatch({
            type: 'addMessage',
            message: req.data.errorMsg || flashMessages[req.data.message],
            severity: req.data.message
        })
        dispatch({ type: 'showSnackbar' })
        if (req.data.message === 'error') backDropDispatch({ type: 'closeBackDrop' })
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

export default memo(ConfirmationDialog)