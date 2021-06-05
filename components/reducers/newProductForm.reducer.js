const reducer = (state, action) => {
    const deleteKey = () => {
        delete state[action.name]
        return { ...state }
    }
    const actions = {
        onChange: { ...state, [action.name]: action.value },
        onDelete: deleteKey()
    }
    return actions[action.type]
}

export default reducer