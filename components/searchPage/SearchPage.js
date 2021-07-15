import React, { useContext, useEffect } from 'react'
import Searchbar from './Searchbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/searchPage/searchPage.styles'
import Divider from '@material-ui/core/Divider'
import axios from 'axios'
import ProductGrid from './ProductGrid'
import Loader from '../Loader'
import { SearchContext, SearchDispatch } from '../contexts/search.context'

const useStyles = makeStyles(styles)

export default function SearchPage() {
    const state = useContext(SearchContext)
    const classes = useStyles()
    const dispatch = useContext(SearchDispatch)
    useEffect(async () => {
        if (state.pageLoading) {
            dispatch({ type: 'setPageLoading', value: false })
        }
        if (state.redirected) {
            dispatch({ type: 'closeInitialGreet' })
            dispatch({ type: 'setRedirected', value: false })
            const { query, category, city, page } = state
            const request = await axios.post('api/search-products', { query, category, city, page })
            dispatch({ type: 'setProducts', value: request.data.products })
            dispatch({ type: 'resetPage' })
            dispatch({ type: 'setGridLoading', value: false })
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