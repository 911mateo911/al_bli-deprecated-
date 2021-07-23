import React, { useEffect, useContext } from 'react'
import dbConnection from '../../utils/dbConnection'
import { getSession } from 'next-auth/client'
import Product from '../../models/Product'
import User from '../../models/User'
import ProfilePage from '../../components/profilePage/ProfilePage'
import { BackDropDispatch, BackDropContext } from '../../components/contexts/backdrop.context'

export default function UserPage({ user, products, favouritedPosts }) {
    const dispatch = useContext(BackDropDispatch)
    useEffect(() => {
        dispatch({ type: 'closeBackDrop' })
    })
    return (
        <div className='page-Route' >
            <ProfilePage
                user={user}
                products={products}
                favouritedPosts={favouritedPosts}
            />
        </div>
    )
}

export async function getServerSideProps(context) {
    try {
        const { userID } = context.query
        await dbConnection()
        let favourited = []
        const user = await User.findById(userID)
        if (!user) {
            throw new Error()
        }
        const req = context.req
        const session = await getSession({ req })
        if (session && (session.user._id === user._id.toString())) {
            const favouritedPosts = await Product
                .find({ favouritedBy: { $in: user._id.toString() } })
                .sort({
                    rating: -1,
                    date: -1
                })
                .populate('seller', { profilePic: 1, avatarColor: 1 })
            favourited = favouritedPosts
        }
        const publishedProducts = await Product
            .find({ seller: userID })
            .sort({
                rating: -1,
                date: -1
            })
            .populate('seller', { profilePic: 1, avatarColor: 1 })
        user.password = undefined // check why delete operator didnt work here idk
        return {
            props: {
                user: JSON.stringify(user),
                products: JSON.stringify(publishedProducts),
                favouritedPosts: JSON.stringify(favourited)
            }
        }
    } catch (e) {
        return {
            props: {
                user: {
                    error: 404
                },
                products: [],
                favouritedPosts: []
            }
        }
    }
}