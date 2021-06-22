import React from 'react'
import { box, getImg, bigBox } from './CarDetails'
import FadeInHoc from './FadeIn.hoc'

export default function HouseDetails({
    city,
    cmimi,
    nrDhoma,
    nrKate,
    currency,
    adresa,
    siperfaqe
}) {
    return (
        <FadeInHoc>
            {bigBox(`${cmimi} ${currency}`, getImg('cash.svg'), 'Cmimi')}
            {bigBox(city, getImg('city-variant-outline.svg'), 'Qyteti')}
            {box(nrDhoma, getImg('home-assistant.svg'), 'Nr. i dhomave')}
            {box(`${siperfaqe} m2`, getImg('home-floor-l.svg'), 'Siperfaqe')}
            {box(nrKate, getImg('home-modern.svg'), 'Nr. i kateve')}
            {bigBox(adresa, getImg('home-map-marker.svg'), 'Adresa')}
        </FadeInHoc>
    )
}
