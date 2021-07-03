import { useState } from "react"

function popoverHook(initialValue) {
    const [state, setState] = useState(initialValue)
    function openPopover(e) {
        setState({ ...state, anchorEl: e.currentTarget })
    }
    function closePopover() {
        setState({ ...state, anchorEl: null })
    }
    return [state, openPopover, closePopover]
}

export default popoverHook