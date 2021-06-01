import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Hands from '../../public/hands.png'
import styles from '../../styles/index/main.styles'
import Link from 'next/link'

const useStyles = makeStyles(styles)

export default function Main() {
    const classes = useStyles()
    return (
        <>
            <main className={classes.main} >
                <img className={classes.mainImg} src={Hands} />
                <span className={classes.mainHead} >
                    <h1 className={classes.h1} >Tregto dhe ti</h1>
                    <h3 className={classes.h3} >Shit cfare nuk te duhet, bli gjithcka!</h3>
                </span>
            </main>
            <div className={classes.mainBtn} >
                <span className={classes.btnWrap} >
                    <Link href='/kerko' >
                        <a className={classes.bli} >Bli</a>
                    </Link>
                    <Link href='/shit' >
                        <a className={classes.shit} >Shit</a>
                    </Link>
                </span>
            </div>
            <p className={classes.mainP} >Platforma al-Bli mundeson te shisni te gjitha produktet te cilat nuk ju nevojiten,
            te destinuara per tu lene ne harrese ne bodrum.Pse jo mos te fitosh dhe para.
                Gjithashtu mund te blini artikuj me cmime me te lira krahasuar me tregun, te dores se dyte ose te reja.</p>
        </>
    )
}
