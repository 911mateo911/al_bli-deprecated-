import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import infinity from '../public/infinity.svg'
import { BackDropContext } from './contexts/backdrop.context'

const styles = theme => ({
    root: {
        backgroundColor: 'white',
        marginTop: '70px',
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
        marginBottom: '70px'
    }
})

const useStyles = makeStyles(styles)

export default function BackDrop() {
    const state = useContext(BackDropContext)
    const classes = useStyles()
    return (
        <Backdrop
            open={state.open}
            className={classes.root}
        >
            <img className={classes.loader} src={infinity.src} />
        </Backdrop>
    )
}
