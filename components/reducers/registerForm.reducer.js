const reducer = (state, action) => {
    const actions = {
        onChange: { ...state, [action.name]: action.value },
        deletePhoto: { ...state, profilePic: [] }
    }
    return actions[action.type]
}

export default reducer