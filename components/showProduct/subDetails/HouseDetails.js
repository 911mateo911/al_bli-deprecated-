import React from 'react'
import FadeInHoc from './FadeIn.hoc'
import { box, getImg, bigBox } from './CarDetails'

export default function HouseDetails() {
    return (
        <FadeInHoc>
            {box('3', getImg('home-assistant.svg'), 'Nr. i dhomave')}
            {box('109m2', getImg('home-outline.svg'), 'Modeli')}
            {box('2', getImg('home-modern.svg'), 'Nr. i kateve')}
            {bigBox('160000 ALL', getImg('cash.svg'), 'Cmimi')}
            {bigBox('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commo', getImg('home-map-marker.svg'), 'Adresa')}
        </FadeInHoc>
    )
}
