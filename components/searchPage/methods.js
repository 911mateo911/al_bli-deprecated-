import axios from 'axios'

async function onRedirect(dispatch, state) {
    dispatch({ type: 'setHasMore', value: true })
    dispatch({ type: 'setGetMore', value: false })
    dispatch({ type: 'closeInitialGreet' })
    dispatch({ type: 'setRedirected', value: false })
    const { query, category, city } = state
    const request = await axios.post('api/search-products', { query, category, city, page: 0 })
    dispatch({ type: 'setProducts', value: request.data.products })
    dispatch({ type: 'resetPage' })
    dispatch({ type: 'setGridLoading', value: false })
}

function onSearchFromNavbar(dispatch, state) {
    dispatch({ type: 'setCategory', value: 'all' })
    dispatch({ type: 'setCity', value: 'all' })
    dispatch({ type: 'setRedirected', value: true })
    dispatch({ type: 'setQuery', value: state })
    dispatch({ type: 'setGridLoading', value: true })
    dispatch({ type: 'resetPage' })
}

async function onInfiniteScroll(dispatch, state) {
    dispatch({ type: 'setScrollLoading', value: true })
    dispatch({ type: 'increasePage' })
    const { query, category, city, page } = state
    const request = await axios.post('api/search-products', { query, category, city, page })
    dispatch({ type: 'setProducts', value: [...state.products, ...request.data.products] })
    if (request.data.products.length < 10) {
        dispatch({ type: 'setHasMore', value: false })
    }
    dispatch({ type: 'setScrollLoading', value: false })
    dispatch({ type: 'setGetMore', value: false })
}

async function onSearchInPage(dispatch, state) {
    dispatch({ type: 'setHasMore', value: true })
    dispatch({ type: 'setGetMore', value: false })
    dispatch({ type: 'closeInitialGreet' })
    dispatch({ type: 'resetPage' })
    dispatch({ type: 'setGridLoading', value: true })
    const { query, category, city } = state
    const request = await axios.post('api/search-products', { query, category, city, page: 0 })
    dispatch({ type: 'closeInitialGreet' })
    dispatch({ type: 'setProducts', value: request.data.products })
    dispatch({ type: 'resetPage' })
    dispatch({ type: 'setGridLoading', value: false })
}

export { onRedirect, onInfiniteScroll, onSearchInPage, onSearchFromNavbar }