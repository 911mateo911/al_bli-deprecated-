import { useContext, useReducer, createContext } from 'react'
import reducer from '../reducers/search.reducer'

const initialValues = {
    query: '',
    category: 'all',
    redirected: false,
    products: []
}

export const SearchContext = createContext()
export const SearchDispatch = createContext()

export function SearchProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <SearchContext.Provider value={state} >
            <SearchDispatch.Provider value={dispatch} >
                {props.children}
            </SearchDispatch.Provider>
        </SearchContext.Provider>
    )
}