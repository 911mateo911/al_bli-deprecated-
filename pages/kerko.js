import dynamic from 'next/dynamic'

const SearchPage = dynamic(
    () => import('../components/searchPage/SearchPage'),
    { ssr: false }
)

export default function Kerko() {
    return (
        <div className='page-Route' >
            <SearchPage />
        </div>
    )
}