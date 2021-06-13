import React from 'react'
import FadeInHoc from './FadeIn.hoc'
import { box, getImg } from './CarDetails'

export default function MotorcycleDetails() {
    return (
        <FadeInHoc>
            {box('Kawasaki', getImg('motorbike.svg'), 'Marka')}
            {box('TX40', getImg('motorbike-electric.svg'), 'Modeli')}
            {box('13/06/2019', getImg('calendar-month-outline.svg'), 'Viti')}
        </FadeInHoc>
    )
}
