import { useState } from "react"

function dialogHook(initialValue) {
    const [state, setState] = useState(initialValue)
    function openDialog(e) {
        setState({ open: true })
    }
    function closeDialog() {
        setState({ open: false })
    }
    return [state, openDialog, closeDialog]
}

export default dialogHook