import React from 'react'
import styles from '../../styles/index/features.styles'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

export default function Features() {
    const classes = useStyles()
    return (
        <div>
            <h3 className={classes.h3} >Perse al-Bli</h3>
            <h4 className={classes.h4} >Platforma me e re shqiptare per shitjen e produkteve te dores se dyte ose te reja.</h4>
            <div className={classes.featureWrap} >
                <span className={classes.featureItem} >
                    <h4 className={classes.featureH4} >E gjitha falas</h4>
                    <p className={classes.featureP} >E gjithe platforma nuk ka, dhe nuk do te kete asnjehere kosto shtese, ose reklama bezdisese.</p>
                </span>
                <span className={classes.featureItem} >
                    <h4 className={classes.featureH4} >Kerkim Inteligjent</h4>
                    <p className={classes.featureP} >Gjeni ate cfare kerkoni ne sa me pak kohe dhe perkushtim.</p>
                </span>
                <span className={classes.featureItem} >
                    <h4 className={classes.featureH4} >UI i thjeshte</h4>
                    <p className={classes.featureP} >Tashme me e lehte se kurre me nderfaqjen e thjeshte, miqesore dhe dinamike.</p>
                </span>
            </div>
        </div>
    )
}
