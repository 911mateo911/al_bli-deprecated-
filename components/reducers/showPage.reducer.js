const reducer = (state, action) => {
    const actions = {
        openPopover: { ...state, anchorEl: action.target },
        closePopover: { ...state, anchorEl: null },
        openDialog: { ...state, dialogOpen: true },
        closeDialog: { ...state, dialogOpen: false },
        startLoading: { ...state, loading: true },
        stopLoading: { ...state, loading: false }
    }
    return actions[action.type]
}

export default reducer