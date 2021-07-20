const reducer = (state, action) => {
    const actions = {
        openBackDrop: { open: true },
        closeBackDrop: { open: false }
    }
    return actions[action.type]
}

export default reducer