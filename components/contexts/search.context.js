import { useContext, useReducer, createContext } from 'react'
import reducer from '../reducers/search.reducer'

const initialValues = {
    query: '',  //query text 
    category: 'all', // category
    city: 'all', // city
    redirected: false, // if redirected from another page, used on useEffect on search page after redirected from search in nav
    products: [], // products got from api
    page: 1, // page in pagination to be skipped in api
    initialGreet: true, // whether is first time visiting search page
    gridLoading: false, // if the product grid is loading/ getting response from api
    scrollLoading: false, // is infinite scrolling is loading/ getting data
    pageLoading: false, // redirecting to a product from a card, triggers loader
    shareDialogOpen: false, // share dialog trigger
    dialogUrl: '', // url passed to dialog component
    hasMore: true, // if results from api are below 10 this is false meaning there are nomore left from api dont call again
    getMore: false, // triggered by intersection observer to call infinite scroller
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