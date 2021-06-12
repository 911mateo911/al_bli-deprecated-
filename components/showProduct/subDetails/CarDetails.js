import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FadeIn from 'react-fade-in';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    box: {
        textAlign: 'center',
        display: 'flex',
        width: '100px',
        margin: '10px',
        height: '100px',
        borderRadius: '5px',
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 6px 20px rgb(93 93 93 / 23%)'
        }
    },
    text: {
        fontFamily: 'Lato',
        margin: '0',
        width: 'fit-content',
        fontWeight: '400'
    },
    value: {
        fontFamily: 'Lato',
        margin: '0',
        width: 'fit-content',
        fontWeight: '600'
    },
    img: {
        width: '50px',
        height: '40px'
    }
}

const useStyles = makeStyles(styles)

function getImg(src) {
    return `https://api.iconify.design/mdi:${src}?height=24&color=%233291ff`
}

const box = (value, imgUrl, text) => {
    const classes = useStyles()
    return (
        <div className={classes.box} >
            <p className={classes.text} >{text}</p>
            <div className={classes.img} style={{ background: `url(${imgUrl}) no-repeat center center / contain` }} ></div>
            <p className={classes.value} >{value}</p>
        </div>
    )
}

export default function CarDetails() {
    const classes = useStyles()
    return (
        <FadeIn className={classes.root} >
            {box('BMW', getImg('car.svg'), 'Marka')}
            {box('X5', getImg('car-info.svg'), 'Modeli')}
            {box('2019', getImg('calendar-month-outline.svg'), 'Viti')}
            {box('300000', getImg('map-marker-distance.svg'), 'Kilometra')}
            {box('Nafte', getImg('gas-station.svg'), 'Karburanti')}
            {box('Manual', getImg('speedometer.svg', 'Transmisioni'))}
        </FadeIn>
    )
}
