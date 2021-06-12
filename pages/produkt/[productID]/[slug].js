import React from 'react'
import { useRouter } from 'next/router'
import ShowPage from '../../../components/showProduct/ShowPage'

export default function Product() {
    const router = useRouter()
    const { slug, productID } = router.query
    return (
        <div>
            <ShowPage />
        </div>
    )
}
