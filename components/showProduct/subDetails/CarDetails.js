import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../../styles/showPage/carDetails.styles'

const useStyles = makeStyles(styles)

export function getImg(src) {
    return `https://api.iconify.design/mdi:${src}?height=24&color=%233291ff`
}

export const box = (value, imgUrl, text) => {
    const classes = useStyles()
    return (
        <div className={classes.box} >
            <p className={classes.text} >{text}</p>
            <div className={classes.img} style={{ background: `url(${imgUrl}) no-repeat center center / contain` }} ></div>
            <p className={classes.value} >{value}</p>
        </div>
    )
}

export const bigBox = (value, imgUrl, text) => {
    const classes = useStyles()
    const boxStyles = { maxWidth: '500px', width: 'fit-content', padding: '10px', height: 'fit-Content' }
    return (
        <div className={classes.box} style={boxStyles} >
            <p className={classes.text} >{text}</p>
            <div className={classes.img} style={{ background: `url(${imgUrl}) no-repeat center center / contain` }} ></div>
            <p className={classes.value} >{value}</p>
        </div>
    )
}

export default function CarDetails({ cmimi,
    currency,
    city,
    marka,
    modeli,
    viti,
    km,
    karburanti,
    transmisioni
}) {
    return (
        <>
            {bigBox(`${cmimi} ${currency}`, getImg('cash.svg'), 'Cmimi')}
            {bigBox(city, getImg('city-variant-outline.svg'), 'Qyteti')}
            {box(marka, getImg('car.svg'), 'Marka')}
            {box(modeli, getImg('car-info.svg'), 'Modeli')}
            {box(viti, getImg('calendar-month-outline.svg'), 'Viti')}
            {box(km, getImg('map-marker-distance.svg'), 'Kilometra')}
            {box(karburanti, getImg('gas-station.svg'), 'Karburanti')}
            {box(transmisioni, getImg('speedometer.svg'), 'Transmisioni')}
        </>
    )
}
