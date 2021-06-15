const reducer = (state, action) => {
    const deleteKey = () => {
        delete state[action.name]
        return { ...state }
    }
    const actions = {
        onChange: { ...state, [action.name]: action.value },
        onAdd: { ...state, keywords: [...state.keywords, action.chip] },
        onDeleteChip: { ...state, keywords: [...state.keywords.filter(e => e !== action.chip)] },
        onDelete: deleteKey()
    }
    return actions[action.type]
}

export default reducer