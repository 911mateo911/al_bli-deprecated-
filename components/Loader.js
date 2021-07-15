import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import infinity from '../public/infinity.svg'
import Image from 'next/image'

const styles = theme => ({
    loaderWrap: {
        width: '100%',
        height: 'calc(100vh - 70px - 91px)',
        display: 'flex',
        marginTop: '70px',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '90',
        flexDirection: 'column'
    },
    img: {
        width: '150px',
        height: '150px'
    },
    message: {
        fontFamily: 'Lato',
        margin: '0',
        fontSize: '1.1rem',
        marginTop: '0px'
    }
})

const useStyles = makeStyles(styles)

export default function Loader({ message }) {
    const classes = useStyles()
    return (
        <div className={classes.loaderWrap} >
            <Image
                alt='loading'
                className={classes.img}
                src={infinity.src}
                width={150}
                height={150}
            />
            {message && <p className={classes.message} >{message}</p>}
        </div>
    )
}
