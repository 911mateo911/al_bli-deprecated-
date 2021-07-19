const reducer = (state, action) => {
    const actions = {
        closeInitialGreet: { ...state, initialGreet: false },
        setQuery: { ...state, query: action.value },
        setCategory: { ...state, category: action.value },
        setCity: { ...state, city: action.value },
        setRedirected: { ...state, redirected: action.value },
        setProducts: { ...state, products: action.value },
        increasePage: { ...state, page: state.page + 1 },
        resetPage: { ...state, page: 1 },
        setGridLoading: { ...state, gridLoading: action.value },
        setScrollLoading: { ...state, scrollLoading: action.value },
        setPageLoading: { ...state, pageLoading: action.value },
        openShareDialog: { ...state, shareDialogOpen: true },
        closeShareDialog: { ...state, shareDialogOpen: false },
        setDialogUrl: { ...state, dialogUrl: action.value },
        setHasMore: { ...state, hasMore: action.value },
        setGetMore: { ...state, getMore: action.value }
    }
    return actions[action.type]
}

export default reducer