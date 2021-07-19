import { useContext, useReducer, createContext } from 'react'
import reducer from '../reducers/search.reducer'

const initialValues = {
    query: '',
    category: 'all',
    city: 'all',
    redirected: false,
    products: [],
    page: 1,
    initialGreet: true,
    gridLoading: false,
    scrollLoading: false,
    pageLoading: false,
    shareDialogOpen: false,
    dialogUrl: '',
    hasMore: true,
    getMore: false,
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