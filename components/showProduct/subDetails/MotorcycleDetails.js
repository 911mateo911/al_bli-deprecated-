import React from 'react'
import FadeInHoc from './FadeIn.hoc'
import { box, getImg, bigBox } from './CarDetails'

export default function MotorcycleDetails({ cmimi, city, marka, modeli, viti, currency }) {
    return (
        <FadeInHoc>
            {bigBox(`${cmimi} ${currency}`, getImg('cash.svg'), 'Cmimi')}
            {bigBox(city, getImg('city-variant-outline.svg'), 'Qyteti')}
            {box(marka, getImg('motorbike.svg'), 'Marka')}
            {box(modeli, getImg('motorbike-electric.svg'), 'Modeli')}
            {box(viti, getImg('calendar-month-outline.svg'), 'Viti')}
        </FadeInHoc>
    )
}
