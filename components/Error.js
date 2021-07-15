import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import styles from '../styles/newProduct/error.styles'
import Image from 'next/image'

const useStyles = makeStyles(styles)

export default function Error({ src, h1, desc }) {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Image
                className={classes.img}
                src={src}
                width={300}
                height={300}
            />
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
