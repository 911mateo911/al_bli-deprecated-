import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/registerForm.reducer'

const initialValues = {
    name: '',
    profilePic: [],
    email: '',
    telephone: '',
    password: ''
}

export const RegisterFormContext = createContext()
export const RegisterFormDispatch = createContext()

export function RegisterFormProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <RegisterFormContext.Provider value={state} >
            <RegisterFormDispatch.Provider value={dispatch} >
                {children}
            </RegisterFormDispatch.Provider>
        </RegisterFormContext.Provider>
    )
}