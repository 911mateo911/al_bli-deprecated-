import Main from '../components/homepage/Main'
import React from 'react'
import Features from '../components/homepage/Features'
import LatestPosts from '../components/homepage/LatestPosts'
import Cta from '../components/homepage/Cta'
import dbConnection from '../utils/dbConnection'
import Product from '../models/Product'
import Loader from '../components/Loader'
import HeadTags from '../components/seo/Head'

export default function Home({ posts }) {
  return (
    <div className='page-Route' >
      <HeadTags
        title='al-Bli - Shit gjithcka, bli gjithcka!'
        description='Platforma al-Bli mundeson te shisni te gjitha produktet te cilat nuk ju nevojiten, te destinuara per tu lene ne harrese ne bodrum.Pse jo mos te fitosh dhe para.'
        keywords='shit,shitet,bli,makina,al-bli,platforme'
        author='al-bli - Mateo Malaj'
      />
      <Main />
      <Features />
      <LatestPosts posts={posts} />
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
      .limit(10).populate('seller', { profilePic: 1, avatarColor: 1 })
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
