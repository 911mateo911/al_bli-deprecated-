import React, { useContext, useEffect } from 'react'
import Searchbar from './Searchbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/searchPage/searchPage.styles'
import Divider from '@material-ui/core/Divider'
import ProductGrid from './ProductGrid'
import Loader from '../Loader'
import { SearchContext, SearchDispatch } from '../contexts/search.context'

const useStyles = makeStyles(styles)

export default function SearchPage() {
    const state = useContext(SearchContext)
    const classes = useStyles()
    const dispatch = useContext(SearchDispatch)
    useEffect(() => {
        if (state.pageLoading) {
            dispatch({ type: 'setPageLoading', value: false })
        }
    }, [])
    if (state.pageLoading) return <Loader />
    return (
        <div className={classes.root} >
            <Searchbar />
            {state.initialGreet ?
                <h2 className={classes.h2} >Kerko c'te intereson shpejt dhe lehtesisht.</h2>
                :
                <ProductGrid
                    products={state.products}
                    gridLoading={state.gridLoading}
                />
            }
        </div>
    )
}