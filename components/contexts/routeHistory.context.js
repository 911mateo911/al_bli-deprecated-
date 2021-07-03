import { createContext, useReducer } from "react"
import reducer from '../reducers/routeHistory.reducer'

const initialValues = {
    history: []
}

export const RouterHistoryContext = createContext()
export const RouterDispatchContext = createContext()

export function RouterProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <RouterHistoryContext.Provider value={state} >
            <RouterDispatchContext.Provider value={dispatch} >
                {props.children}
            </RouterDispatchContext.Provider>
        </RouterHistoryContext.Provider>
    )
}