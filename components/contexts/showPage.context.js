import { createContext, useReducer } from 'react'
import reducer from '../reducers/showPage.reducer'

const initialValues = {
    anchorEl: null,
    dialogOpen: false,
    shareDialogOpen: false,
    fullScreenPhoto: false
}

export const ShowPageContext = createContext()
export const ShowPageDispatch = createContext()

export function ShowPageProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <ShowPageContext.Provider value={state} >
            <ShowPageDispatch.Provider value={dispatch} >
                {props.children}
            </ShowPageDispatch.Provider>
        </ShowPageContext.Provider>
    )
}