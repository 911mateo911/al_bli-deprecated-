import React from 'react'
import FadeInHoc from './FadeIn.hoc'
import { box, getImg, bigBox } from './CarDetails'

export default function MotorcycleDetails() {
    return (
        <FadeInHoc>
            {bigBox('16000 ALL', getImg('cash.svg'), 'Cmimi')}
            {box('Kawasaki', getImg('motorbike.svg'), 'Marka')}
            {box('TX40', getImg('motorbike-electric.svg'), 'Modeli')}
            {box('13/06/2019', getImg('calendar-month-outline.svg'), 'Viti')}
        </FadeInHoc>
    )
}
