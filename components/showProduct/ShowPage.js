import React from 'react'
import styles from '../../styles/showPage/showPage.styles'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from './Carousel'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Keywords from './Keywords'

const useStyles = makeStyles(styles)
const description =
    `SHITET NISSAN QASHQAI 2.0 DCI
4X4
2.0 NAFTE
VITI PRODHIMIT NENTOR 2011
148.500 KM CDO SHERBIM I SHENUAR NE LIBER SERVISJ
KAMBIO AUTOMATIKE
SENSORE PARKIMI
PILOT AUTOMATIK
KLIMA
SENSOR DRITASH SHIU
PASQYRA ME MBYLLJE ELEKTRIKE
2 CELESA
LIBER SERVISI
RRIPI I FAZES DHE POMPA E UJIT E NDERRUAR NE NENTOR 2019
CDO SHERBIM I KRYER TEK KONCESIONARI PERKATES.
NE GJENDJE PERFEKTE MOTORRIKE DHE XHENERIKE
MAKINA SAPO KA ARDHUR NGA ZVICRA.
MUND TA KONTROLLONI KU TE DESHIRONI

CMIMI 9200 EURO
CEL 0684741090
`

const keywordList = ['mateo', 'malaj', 'kotlin', 'nodejs', 'javascript']

export default function ShowPage() {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Carousel />
            <div className={classes.details} >
                <span className={classes.user} >
                    <Avatar alt='Mateo Malaj' src='https://images.unsplash.com/photo-1571224736343-7182962ae3e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80' />
                    <h4 className={classes.username} >Mateo Malaj</h4>
                    <p className={classes.date} >19/08/2021</p>
                </span>
                <Divider className={classes.divider} />
                <h1 className={classes.h1} >
                    Shitet X5 2019 3.5 cdi nafte timon anglez.
                </h1>
                <Keywords list={keywordList} />
                <Divider className={classes.divider} />
                <div className={classes.description} >
                    {description}
                </div>
                <Divider className={classes.divider} />
            </div>
        </div >
    )
}
