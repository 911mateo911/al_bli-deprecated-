const reducer = (state, action) => {
    const actions = {
        onChange: { ...state, [action.name]: action.value }
    }
    return actions[action.type]
}

export default reducer