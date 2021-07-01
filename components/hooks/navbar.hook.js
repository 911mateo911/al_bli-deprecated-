import React, { useState } from 'react'

function navbarHook(initialValue) {
    const [state, setState] = useState(initialValue)
    function toggleMenu() {
        setState({ ...state, menuOpen: !state.menuOpen })
    }
    function toggleSearch() {
        setState({ ...state, searchOpen: !state.searchOpen })
    }
    function openPopover(e) {
        setState({ ...state, anchorEl: e.currentTarget })
    }
    function closePopover() {
        setState({ ...state, anchorEl: null })
    }
    return [state, toggleMenu, toggleSearch, openPopover, closePopover]
}

export default navbarHook