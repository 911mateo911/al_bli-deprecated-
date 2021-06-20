import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CarDetails from './subDetails/CarDetails'
import MotorCycleDetails from './subDetails/MotorcycleDetails'
import HouseDetails from './subDetails/HouseDetails'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '20px'
    }
})

const useStyles = makeStyles(styles)

export default function ProdDetails({ category, product }) {
    const classes = useStyles()
    function isCategory(str) {
        return category === str
    }
    return (
        <div className={classes.root} >
            {isCategory('Makina') && <CarDetails />}
            {isCategory('Motorcikleta') && <MotorCycleDetails
                cmimi={product.price}
                marka={product.marka}
                modeli={product.modeli}
                viti={product.viti}
                currency={product.currency}
                city={product.city}
            />}
            {isCategory('Shtepi') && <HouseDetails />}
        </div>
    )
}
