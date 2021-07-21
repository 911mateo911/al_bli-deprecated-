const reducer = (state, action) => {
    const actions = {
        openShareDialog: { ...state, shareDialogOpen: true },
        closeShareDialog: { ...state, shareDialogOpen: false },
        setDialogUrl: { ...state, dialogUrl: action.value },
        setPageLoading: { ...state, pageLoading: action.value }
    }
    return actions[action.type]
}

export default reducer