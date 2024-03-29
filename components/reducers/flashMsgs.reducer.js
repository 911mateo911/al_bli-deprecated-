const reducer = (state, action) => {
    const actions = {
        addMessage: { ...state, message: action.message, severity: action.severity },
        showSnackbar: { ...state, open: true },
        hideSnackbar: { ...state, open: false }
    }
    return actions[action.type]
}

export default reducer