const reducer = (state, action) => {
    function cleanHistory() {
        const history = [...state.history]
        while (history.length > 10) {
            history.shift()
        }
        return { history }
    }
    const actions = {
        pushHistory: { history: [...state.history, action.value] },
        cleanHistory: cleanHistory()
    }
    return actions[action.type]
}

export default reducer