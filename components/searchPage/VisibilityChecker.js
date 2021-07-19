import React, { useRef, useEffect, useContext, memo } from 'react'
import { SearchDispatch, SearchContext } from '../contexts/search.context'

function VisibilityChecker() {
    const dispatch = useContext(SearchDispatch)
    const isEndOfPage = useRef()
    const onIntersection = entries => {
        if (entries[0].isIntersecting) {
            dispatch({ type: 'setGetMore', value: true }) // if intersecting call the function to get data
        }
    }
    const observer = new IntersectionObserver(onIntersection)
    useEffect(() => {
        observer.observe(isEndOfPage.current)
    }, [])
    return (
        <>
            <br ref={isEndOfPage} />
        </>
    )
}

export default memo(VisibilityChecker)