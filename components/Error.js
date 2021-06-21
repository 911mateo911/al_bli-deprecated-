import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import styles from '../styles/newProduct/error.styles'

const useStyles = makeStyles(styles)

export default function Error({ src, h1, desc }) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <img className={classes.img} src={src} />
            <h1 className={classes.h1}>{h1}</h1>
            <p className={classes.p}>{desc}</p>
            <Link href='/'>
                <a className={classes.link}>
                    Kthehu ne shtepi
                </a>
            </Link>
        </div>
    )
}
