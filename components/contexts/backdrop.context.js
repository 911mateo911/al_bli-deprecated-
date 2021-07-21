import { initial } from "lodash"
import { createContext, useReducer } from "react"
import reducer from '../reducers/backdrop.reducer'

const initialValues = {
    open: false
}

export const BackDropContext = createContext()
export const BackDropDispatch = createContext()

export function BackDropProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <BackDropContext.Provider value={state} >
            <BackDropDispatch.Provider value={dispatch} >
                {props.children}
            </BackDropDispatch.Provider>
        </BackDropContext.Provider>
    )
}