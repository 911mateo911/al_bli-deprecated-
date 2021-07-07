import React, { useContext } from 'react'
import Searchbar from './Searchbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/searchPage/searchPage.styles'
import Divider from '@material-ui/core/Divider'
import ProductGrid from './ProductGrid'
import { SearchContext } from '../contexts/search.context'

const useStyles = makeStyles(styles)

export default function SearchPage() {
    const state = useContext(SearchContext)
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Searchbar />
            <ProductGrid products={state.products} />
        </div>
    )
}