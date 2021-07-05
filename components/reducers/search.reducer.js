const reducer = (action, state) => {
    const actions = {
        search: { ...state, query: action.value }
    }
    return actions[action]
}

export default reducer