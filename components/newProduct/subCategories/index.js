import React from 'react'
import Car from './Car'
import Subs from './Subs'
import Motorcycle from './Motorcycle'
import House from './House'
import OtherHouse from './OtherHouse'
import Phones from './Phones'
import { boatSubCategories, carSubCategories, decorationSubCategories, farmCarsSubCategories } from '../utils/subCategories'

export default function index({ state }) {
    function isState(str) {
        return state === str
    }
    return (
        <>
            {isState('Makina') && <Car />}
            {isState('Pjese kembimi') && <Subs subCategories={carSubCategories} name='subPjeseKembimi' />}
            {isState('Motorcikleta') && <Motorcycle />}
            {isState('Anije') && <Subs name='subAnije' subCategories={boatSubCategories} />}
            {isState('Makina bujqesore') && <Subs name='subMakinaBujqesore' subCategories={farmCarsSubCategories} />}
            {isState('Shtepi/Vila') && <House name='house' />}
            {isState('Apartamente') && <House name='apartment' />}
            {isState('Garazhe') && <OtherHouse />}
            {isState('Toke/Ferma') && <OtherHouse />}
            {isState('Dhoma') && <OtherHouse />}
            {isState('Dekorime') && <Subs name='subDekorime' subCategories={decorationSubCategories} />}
            {isState('Telefona') && <Phones />}
            {isState('Ambiente biznesi') && <OtherHouse />}
        </>
    )
}
