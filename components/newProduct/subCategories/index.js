import React from 'react'
import Car from './Car'
import Subs from './Subs'
import { boatSubCategories, carSubCategories, farmCarsSubCategories } from '../utils/subCategories'

export default function index({ state }) {
    function isState(str) {
        return state === str
    }
    return (
        <>
            {isState('Makina') && <Car />}
            {isState('Pjese kembimi') && <Subs subCategories={carSubCategories} />}
            {isState('Motorcikleta') && <Motorcycle />}
            {isState('Anije') && <Subs subCategories={boatSubCategories} />}
            {isState('Makina bujqesore') && <Subs subCategories={farmCarsSubCategories} />}
        </>
    )
}
