import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/flashMsgs.reducer'

const initialValues = {
    message: '',
    open: false
}

export const FlashMsgContext = createContext()
export const FlashDispatchContext = createContext()

export function FlashMsgProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <FlashMsgContext.Provider value={state} >
            <FlashDispatchContext.Provider value={dispatch} >
                {props.children}
            </FlashDispatchContext.Provider >
        </FlashMsgContext.Provider >
    )
}