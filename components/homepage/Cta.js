import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/index/cta.styles'
import rocket from '../../public/rocket.png'
import FadeInHOC from './FadeInHOC'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const useStyles = makeStyles(styles)

export default function Cta() {
    const classes = useStyles()
    const { src: rocketSrc } = rocket
    return (
        <div className={classes.root} >
            <LazyLoadImage
                className={classes.img}
                src={rocketSrc}
                alt='Jepi nje shtytje portofolit tend'
            />
            <span className={classes.cta} >
                <FadeInHOC
                    seconds={1.2}
                >
                    <h2 className={classes.h2} >Jepi nje shtytje portofolit tend!</h2>
                </FadeInHOC>
                <FadeInHOC
                    seconds={1.7}
                >
                    <h4 className={classes.h4} >Mos i flak tutje sendet qe nuk te nevojiten,
                        me mire, tregtoji ketu!</h4>
                </FadeInHOC>
                <Link href='/produkt/shto' >
                    <a className={classes.shit} >Shit produktin e pare</a>
                </Link>
            </span>
        </div>
    )
}
