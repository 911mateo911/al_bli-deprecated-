import { createContext, useReducer } from 'react'
import reducer from '../reducers/newProductForm.reducer'

export const EditContext = createContext()
export const DispatchContext = createContext()

export function EditPageProvider(props) {
    const [state, dispatch] = useReducer(reducer, {}, () => { })
    return (
        <EditContext.Provider value={state} >
            <DispatchContext.Provider value={dispatch} >
                {props.children}
            </DispatchContext.Provider>
        </EditContext.Provider>
    )
}