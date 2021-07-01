import React, { useState } from 'react'

function loginPageHook(initialValue) {
    const [state, setState] = useState(initialValue)
    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    function togglePassword() {
        setState({ ...state, passwordShown: !state.passwordShown })
    }
    function handleMouseDownPassword(e) {
        e.preventDefault()
    }
    function startLoading() {
        setState({ ...state, loading: true })
    }
    function stopLoading() {
        setState({ ...state, loading: false })
    }
    return [state, handleChange, togglePassword, handleMouseDownPassword, startLoading, stopLoading]
}

export default loginPageHook