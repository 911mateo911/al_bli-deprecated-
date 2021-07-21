import React, { useEffect, useContext } from 'react'
import dbConnection from '../../utils/dbConnection'
import Product from '../../models/Product'
import User from '../../models/User'
import ProfilePage from '../../components/profilePage/ProfilePage'
import { BackDropDispatch } from '../../components/contexts/backdrop.context'

export default function UserPage({ user, products }) {
    const dispatch = useContext(BackDropDispatch)
    useEffect(() => {
        dispatch({ type: 'closeBackDrop' })
    }, [])
    return (
        <div className='page-Route' >
            <ProfilePage user={user} products={products} />
        </div>
    )
}

export async function getServerSideProps(context) {
    try {
        const { userID } = context.query
        await dbConnection()
        const user = await User.findById(userID)
        if (!user) {
            throw new Error()
        }
        const publishedProducts = await Product
            .find({ seller: userID })
            .sort({
                rating: -1,
                date: -1
            })
            .limit(10)
        user.password = undefined // check why delete operator didnt work here idk
        return {
            props: {
                user: JSON.stringify(user),
                products: JSON.stringify(publishedProducts)
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                user: {
                    error: 404
                },
                products: []
            }
        }
    }
}