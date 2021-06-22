import React from 'react'
import FadeInHoc from './FadeIn.hoc'
import { bigBox, getImg } from './CarDetails'

export default function SubsDetails({ cmimi, currency, city, category, subCategory }) {
    function upperCase(str) {
        const arr = [...str]
        const other = [...str].slice(1)
        return `${arr[0].toUpperCase()}${other.join('')}`
    }
    return (
        <FadeInHoc>
            {bigBox(`${cmimi} ${currency}`, getImg('cash.svg'), 'Cmimi')}
            {bigBox(city, getImg('city-variant-outline.svg'), 'Qyteti')}
            {bigBox(category, getImg('shape-outline.svg'), 'Kategoria')}
            {bigBox(upperCase(subCategory), getImg('hexagon-multiple.svg'), 'Nenkategoria')}
        </FadeInHoc>
    )
}
