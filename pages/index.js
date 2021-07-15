import Main from '../components/homepage/Main'
import React, { useState } from 'react'
import Features from '../components/homepage/Features'
import LatestPosts from '../components/homepage/LatestPosts'
import Cta from '../components/homepage/Cta'
import dbConnection from '../utils/dbConnection'
import Product from '../models/Product'
import Loader from '../components/Loader'

export default function Home({ posts }) {
  const [isLoading, setLoading] = useState(false)
  if (isLoading) {
    return <Loader />
  }
  return (
    <div className='page-Route' >
      <Main />
      <Features />
      <LatestPosts posts={posts} setLoading={setLoading} />
      <Cta />
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await dbConnection()
    const latestPosts = await Product.find({})
      .sort({
        rating: -1,
        date: -1
      })
      .limit(10).populate('seller', { profilePic: 1 })
    return {
      props: {
        posts: JSON.stringify(latestPosts)
      }
    }
  } catch (e) {
    return {
      props: {
        posts: {
          error: 404
        }
      }
    }
  }
}
