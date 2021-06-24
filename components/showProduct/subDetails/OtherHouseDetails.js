import React from 'react'
import FadeInHoc from './FadeIn.hoc'
import { bigBox, getImg } from './CarDetails'

export default function OtherHouseDetails({ cmimi, currency, city, siperfaqe, adresa }) {
    return (
        <FadeInHoc>
            {bigBox(`${cmimi} ${currency}`, getImg('cash.svg'), 'Cmimi')}
            {bigBox(city, getImg('city-variant-outline.svg'), 'Qyteti')}
            {bigBox(siperfaqe, getImg('home-floor-l.svg'), 'Siperfaqe')}
            {bigBox(adresa, getImg('home-map-marker.svg'), 'Adresa')}
        </FadeInHoc>
    )
}
