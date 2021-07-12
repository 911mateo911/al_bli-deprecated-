const reducer = (state, action) => {
    const actions = {
        onChange: { ...state, [action.name]: action.value },
        onAdd: { ...state, keywords: [...state.keywords, action.chip] },
        onDeleteChip: { ...state, keywords: [...state.keywords.filter(e => e !== action.chip)] },
        onDelete: { ...state, [action.name]: '' },
        onSetPhotos: { ...state, photos: action.photos },
        onSetToDelete: { ...state, toBeDeleted: action.value },
        onAddToDelete: { ...state, toBeDeleted: [...state.toBeDeleted, action.value] }
    }
    return actions[action.type]
}

export default reducer