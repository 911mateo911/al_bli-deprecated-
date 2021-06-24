import Main from '../components/homepage/Main'
import React, { useState } from 'react'
import Features from '../components/homepage/Features'
import LatestPosts from '../components/homepage/LatestPosts'
import Cta from '../components/homepage/Cta'
import { makeStyles } from '@material-ui/core/styles'
import dbConnection from '../utils/dbConnection'
import Product from '../models/Product'
import infinity from '../public/infinity.svg'
import Loader from '../components/Loader'
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

const styles = theme => ({
  root: {
    marginTop: '70px'
  }
})

const useStyles = makeStyles(styles)

export default function Home({ posts }) {
  const classes = useStyles()
  const [isLoading, setLoading] = useState(false)
  const { src: infinitySrc } = infinity
  return (
    isLoading ? <Loader src={infinitySrc} /> : (
      <div className={classes.root} >
        <Main />
        <Features />
        <LatestPosts posts={posts} setLoading={setLoading} />
        <Cta />
      </div>
    )
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
      .limit(10)
    return {
      props: {
        posts: JSON.stringify(latestPosts)
      }
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        posts: {
          error: 404
        }
      }
    }
  }
}
