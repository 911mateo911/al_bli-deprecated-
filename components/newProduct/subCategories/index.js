import React from 'react'
import Car from './Car'
import Subs from './Subs'
import Motorcycle from './Motorcycle'
import House from './House'
import OtherHouse from './OtherHouse'
import Phones from './Phones'
import { boatSubCategories, carSubCategories, decorationSubCategories, farmCarsSubCategories } from '../utils/subCategories'

export default function index({ state, dispatch, context }) {
    function isState(str) {
        return state === str
    }
    return (
        <>
            {isState('Makina') && <Car
                context={context}
                dispatch={dispatch}
            />}
            {isState('Pjese kembimi') && <Subs
                subCategories={carSubCategories}
                name='subPjeseKembimi'
                context={context}
                dispatch={dispatch}
            />}
            {isState('Motorcikleta') && <Motorcycle
                context={context}
                dispatch={dispatch}
            />}
            {isState('Anije') && <Subs
                name='subAnije'
                subCategories={boatSubCategories}
                context={context}
                dispatch={dispatch}
            />}
            {isState('Makina bujqesore') && <Subs
                name='subMakinaBujqesore'
                context={context}
                dispatch={dispatch}
                subCategories={farmCarsSubCategories}
            />}
            {isState('Shtepi/Vila') && <House
                context={context}
                dispatch={dispatch}
                name='house' />}
            {isState('Apartamente') && <House
                context={context}
                dispatch={dispatch}
                name='apartment' />}
            {isState('Garazhe') && <OtherHouse
                context={context}
                dispatch={dispatch}
            />}
            {isState('Toke/Ferma') && <OtherHouse
                context={context}
                dispatch={dispatch}
            />}
            {isState('Dhoma') && <OtherHouse
                context={context}
                dispatch={dispatch}
            />}
            {isState('Dekorime') && <Subs
                name='subDekorime'
                context={context}
                dispatch={dispatch}
                subCategories={decorationSubCategories}
            />}
            {isState('Telefona') && <Phones
                context={context}
                dispatch={dispatch}
            />}
            {isState('Ambiente biznesi') && <OtherHouse
                context={context}
                dispatch={dispatch}
            />}
        </>
    )
}
