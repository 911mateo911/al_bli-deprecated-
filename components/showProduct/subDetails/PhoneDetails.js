import React from 'react'
import { box, getImg, bigBox, formattedDate } from './CarDetails'
import FadeInHoc from './FadeIn.hoc'

export default function PhoneDetails({ modeli, viti, prodhuesi }) {
    const date = new Date(viti)
    return (
        <FadeInHoc>
            {bigBox(modeli, getImg('cellphone-settings.svg'), 'Modeli')}
            {bigBox(prodhuesi, getImg('cellphone.svg'), 'Prodhuesi')}
            {box(formattedDate(date), getImg('calendar-month-outline.svg'), 'Viti')}
        </FadeInHoc>
    )
}
