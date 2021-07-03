import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import Loader from '../../../components/Loader'
import ShowPage from '../../../components/showProduct/ShowPage'
import dbConnection from '../../../utils/dbConnection'
import Product from '../../../models/Product'

export default function foundProduct({ product }) {
    const router = useRouter()
    const gotProduct = JSON.parse(product)
    const [session, loading] = useSession()
    if (loading) return <Loader />
    return (
        <ShowPage product={gotProduct} session={session} />
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