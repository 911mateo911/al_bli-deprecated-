import React from 'react'
import { useRouter } from 'next/router'
import ShowPage from '../../../components/showProduct/ShowPage'
import dbConnection from '../../../utils/dbConnection'
import Product from '../../../models/Product'

export default function foundProduct({ product }) {
    const router = useRouter()
    const { slug, productID } = router.query
    return (
        <ShowPage product={product} />
    )
}

export async function getServerSideProps(context) {
    try {
        const { slug, productID } = context.query
        await dbConnection()
        const foundProduct = await Product.findById(productID)
        return {
            props: {
                product: JSON.stringify(foundProduct)
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                product: 'Nje gabim ndodhi gjate marrjes se te dhenave'
            }
        }
    }
}