const reducer = (state, action) => {
    const actions = {
        setQuery: { ...state, query: action.value },
        setCategory: { ...state, category: action.value }
    }
    return actions[action.type]
}

export default reducer