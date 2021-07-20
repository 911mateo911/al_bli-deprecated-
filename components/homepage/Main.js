import React, { useEffect, useContext, memo } from 'react'
import { BackDropDispatch } from '../contexts/backdrop.context'
import { makeStyles } from '@material-ui/core/styles'
import hands from '../../public/hands.png'
import styles from '../../styles/index/main.styles'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import Snackbar from '../newProduct/Snackbar'
import ZoomInHOC from './ZoomInHOC'

const useStyles = makeStyles(styles)

function Main() {
    const classes = useStyles()
    const { src: handsSrc } = hands
    const dispatch = useContext(BackDropDispatch)
    useEffect(() => {
        // just to be sure
        dispatch({ type: 'closeBackDrop' })
    }, [])
    return (
        <>
            <Snackbar />
            <main className={classes.main} >
                <img
                    className={classes.mainImg}
                    src={handsSrc}
                    alt='al-bli handshake'
                />
                <span className={classes.mainHead} >
                    <h1 className={classes.h1} >Tregto dhe ti.</h1>
                    <Typewriter
                        options={{
                            strings: ['Shit cfare nuk te duhet!', 'Bli gjithcka!', 'Fito para!'],
                            autoStart: true,
                            loop: true,
                            delay: 30
                        }}
                    />
                </span>
            </main>
            <div className={classes.mainBtn} >
                <span className={classes.btnWrap} >
                    <ZoomInHOC>
                        <div>
                            <Link href='/kerko' >
                                <a className={classes.bli} >Bli</a>
                            </Link>
                        </div>
                    </ZoomInHOC>
                    <ZoomInHOC>
                        <div>
                            <Link href='/produkt/shto' >
                                <a className={classes.shit} >Shit</a>
                            </Link>
                        </div>
                    </ZoomInHOC>
                </span>
            </div>
            <p className={classes.mainP} >Platforma al-Bli mundeson te shisni te gjitha produktet te cilat nuk ju nevojiten,
                te destinuara per tu lene ne harrese ne bodrum.Pse jo mos te fitosh dhe para.
                Gjithashtu mund te blini artikuj me cmime me te lira krahasuar me tregun, te dores se dyte ose te reja.</p>
        </>
    )
}

export default memo(Main)