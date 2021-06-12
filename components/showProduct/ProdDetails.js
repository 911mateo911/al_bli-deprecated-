import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CarDetails from './subDetails/CarDetails'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '20px'
    }
})

const useStyles = makeStyles(styles)

export default function ProdDetails({ category }) {
    const classes = useStyles()
    function isCategory(str) {
        return category === str
    }
    return (
        <div className={classes.root} >
            {isCategory('makina') && <CarDetails />}
        </div>
    )
}
