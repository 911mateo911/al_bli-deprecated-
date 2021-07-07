const reducer = (state, action) => {
    const actions = {
        setQuery: { ...state, query: action.value },
        setCategory: { ...state, category: action.value },
        setCity: { ...state, city: action.value },
        setRedirected: { ...state, redirected: action.value },
        setProducts: { ...state, products: action.value },
        increasePage: { ...state, page: state.page + 1 },
        resetPage: { ...state, page: 0 },
        setGridLoading: { ...state, gridLoading: action.value },
        setScrollLoading: { ...state, scrollLoading: action.value }
    }
    return actions[action.type]
}

export default reducer