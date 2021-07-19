/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import Searchbar from './Searchbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/searchPage/searchPage.styles'
import Divider from '@material-ui/core/Divider'
import singleRing from '../../public/singleRing.svg'
import axios from 'axios'
import ProductGrid from './ProductGrid'
import ShareDialog from '../showProduct/ShareDialog'
import Loader from '../Loader'
import { onRedirect, onInfiniteScroll } from './methods'
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
    useEffect(() => {
        if (state.redirected) {
            onRedirect(dispatch, state)
        }
    }, [state.redirected])
    useEffect(() => {
        if (state.getMore && !state.scrollLoading && state.hasMore) {
            onInfiniteScroll(dispatch, state)
        }
    }, [state.getMore])
    if (state.pageLoading) return <Loader />
    return (
        <div className={classes.root} >
            <Searchbar />
            <ShareDialog
                url={state.dialogUrl}
                open={state.shareDialogOpen}
                dispatch={dispatch}
            />
            {state.initialGreet ?
                <h2 className={classes.h2} >Kerko c'te intereson shpejt dhe lehtesisht.</h2>
                :
                <ProductGrid
                    products={state.products.filter(e => e.seller != null)}
                    gridLoading={state.gridLoading}
                />
            }
            {state.scrollLoading &&
                <img
                    alt='get More products'
                    src={singleRing.src}
                    className={classes.scrollLoader}
                />
            }
        </div>
    )
}