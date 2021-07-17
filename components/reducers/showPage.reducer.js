const reducer = (state, action) => {
    const actions = {
        openPopover: { ...state, anchorEl: action.target },
        closePopover: { ...state, anchorEl: null },
        openDialog: { ...state, dialogOpen: true },
        closeDialog: { ...state, dialogOpen: false },
        startLoading: { ...state, loading: true },
        stopLoading: { ...state, loading: false },
        openShareDialog: { ...state, shareDialogOpen: true },
        closeShareDialog: { ...state, shareDialogOpen: false },
        openFullScreenPhotos: { ...state, fullScreenPhoto: true },
        closeFullScreenPhotos: { ...state, fullScreenPhoto: false }
    }
    return actions[action.type]
}

export default reducer