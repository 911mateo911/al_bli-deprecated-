import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

const styles = theme => ({
    root: {
        borderTop: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '20px 0'
    },
    h1: {
        color: '#111',
        margin: '5px',
        textAlign: 'center',
        fontFamily: 'Source Sans Pro',
        fontSize: '.8rem',
        paddingBottom: '5px'
    },
    p: {
        color: '#0053b3',
        margin: '0',
        fontWeight: '600',
        fontFamily: 'Lato'
    }
})

const useStyles = makeStyles(styles)

export default function Footer() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root} >
                <Link href='/'>
                    <a className={classes.p} >Shtepia</a>
                </Link>
                <Link href='/oferta'>
                    <a className={classes.p} >Oferta</a>
                </Link>
                <Link href='/produkt/shto'>
                    <a className={classes.p} >Shit</a>
                </Link>
            </div>
            <h1 className={classes.h1} >Proudly made by Mateo Malaj (v 0.8.0)</h1>
        </>
    )
}
