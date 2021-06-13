import React from 'react'
import FadeInHoc from './FadeIn.hoc'
import { box, getImg } from './CarDetails'

export default function HouseDetails() {
    return (
        <FadeInHoc>
            {box('3', getImg('home-assistant.svg'), 'Nr. i dhomave')}
            {box('109m2', getImg('home-outline.svg'), 'Modeli')}
            {box('2', getImg('home-modern.svg'), 'Nr. i kateve')}
            {box('Tirane', getImg('home-map-marker.svg'), 'Adresa')}
        </FadeInHoc>
    )
}
