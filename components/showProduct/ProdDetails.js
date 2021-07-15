import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CarDetails from './subDetails/CarDetails'
import MotorCycleDetails from './subDetails/MotorcycleDetails'
import HouseDetails from './subDetails/HouseDetails'
import FadeInHoc from './subDetails/FadeIn.hoc'
import { bigBox, getImg } from './subDetails/CarDetails'
import OtherHouseDetails from './subDetails/OtherHouseDetails'
import SubsDetails from './subDetails/SubsDetails'
import PhoneDetails from './subDetails/PhoneDetails'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '0'
        }
    }
})

const useStyles = makeStyles(styles)

export default function ProdDetails({ category, product }) {
    const classes = useStyles()
    function isCategory(str) {
        return category === str
    }
    function isOtherHouse() {
        return isCategory('Garazhe') || isCategory('Toke/Ferma') || isCategory('Dhoma')
    }
    function hasSubCategory() {
        return isCategory('Pjese Kembimi') || isCategory('Dekorime') || isCategory('Anije') || isCategory('Makina Bujqesore')
    }
    function isNoneOfAbove() {
        return isCategory('Makina') || isCategory('Motorcikleta') ||
            isCategory('Shtepi/Vila') || hasSubCategory() || isOtherHouse()
    }
    return (
        <div className={classes.root} >
            {isCategory('Makina') && <CarDetails
                currency={product.currency}
                cmimi={product.price}
                marka={product.marka}
                modeli={product.modeli}
                viti={product.viti}
                city={product.city}
                km={product.kilometra}
                karburanti={product.karburanti}
                transmisioni={product.transmisioni}
            />}
            {isCategory('Telefona') && <PhoneDetails
                modeli={product.modeli}
                prodhuesi={product.prodhuesi}
                viti={product.viti}
            />}
            {isCategory('Motorcikleta') && <MotorCycleDetails
                cmimi={product.price}
                marka={product.marka}
                modeli={product.modeli}
                viti={product.viti}
                currency={product.currency}
                city={product.city}
            />}
            {isCategory('Shtepi/Vila') && <HouseDetails
                cmimi={product.price}
                city={product.city}
                currency={product.currency}
                nrDhoma={product.nrDhoma}
                siperfaqe={product.siperfaqe}
                nrKate={product.kate}
                adresa={product.adresa}
            />}
            {isOtherHouse() && <OtherHouseDetails
                adresa={product.adresa}
                siperfaqe={product.siperfaqe}
                cmimi={product.price}
                currency={product.currency}
                city={product.city}
            />}
            {hasSubCategory() && <SubsDetails
                cmimi={product.price}
                currency={product.currency}
                city={product.city}
                category={product.category}
                subCategory={
                    product.subAnije || product.subPjeseKembimi
                    || product.subMakinaBujqesore || product.subDekorime
                }
            />}
            {!isNoneOfAbove() && (
                <FadeInHoc>
                    {bigBox(`${product.price} ${product.currency}`, getImg('cash.svg'), 'Cmimi')}
                    {bigBox(product.city, getImg('city-variant-outline.svg'), 'Qyteti')}
                    {bigBox(product.category, getImg('shape-outline.svg'), 'Kategoria')}
                </FadeInHoc>
            )}
        </div>
    )
}
