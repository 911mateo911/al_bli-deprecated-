import React from 'react'
import { useRouter } from 'next/router'
import ShowPage from '../../../components/showProduct/ShowPage'
import dbConnection from '../../../utils/dbConnection'
import Product from '../../../models/Product'

export default function foundProduct({ product }) {
    const router = useRouter()
    return (
        <ShowPage product={product} />
    )
}

export async function getServerSideProps(context) {
    try {
        const { productID } = context.query
        await dbConnection()
        const foundProduct = await Product.findById(productID)
        return {
            props: {
                product: JSON.stringify(foundProduct)
            }
        }
    } catch (e) {
        context.res.statuscode = 404
        return {
            props: {
                product: {
                    error: 404
                }
            }
        }
    }
}