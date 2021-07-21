import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import infinity from '../public/infinity.svg'
import { BackDropContext } from './contexts/backdrop.context'
import Fade from '@material-ui/core/Fade'

const styles = theme => ({
    root: {
        backgroundColor: 'white',
        marginTop: '70px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '50px'
        },
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: '1000'
    },
    loader: {
        width: '100px',
        outline: 'none',
        marginBottom: '70px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '50px'
        },
        '&:focus-visible': {
            outline: 'none'
        }
    }
})

const useStyles = makeStyles(styles)

export default function BackDrop() {
    const state = useContext(BackDropContext)
    const classes = useStyles()
    return (
        <Modal
            open={state.open}
            className={classes.root}
            hideBackdrop
        >
            <Fade
                in={state.open}
            >
                <img className={classes.loader} src={infinity.src} />
            </Fade>
        </Modal>
    )
}
