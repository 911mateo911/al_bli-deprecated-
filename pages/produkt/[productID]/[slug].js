import React from 'react'
import { useSession } from 'next-auth/client'
import ShowPage from '../../../components/showProduct/ShowPage'
import dbConnection from '../../../utils/dbConnection'
import Product from '../../../models/Product'
import { ShowPageProvider } from '../../../components/contexts/showPage.context'
import dialogHook from '../../../components/hooks/dialog.hook'

export default function foundProduct({ product }) {
    return (
        <ShowPageProvider>
            <ShowPage
                product={product}
            />
        </ShowPageProvider>
    )
}

export async function getServerSideProps(context) {
    try {
        const { productID } = context.query
        await dbConnection()
        const foundProduct = await Product.findById(productID).populate('seller', { profilePic: 1 })
        if (!foundProduct) {
            throw new Error()
        }
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