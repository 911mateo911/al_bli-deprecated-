import Main from '../components/homepage/Main'
import React, { useState } from 'react'
import Features from '../components/homepage/Features'
import LatestPosts from '../components/homepage/LatestPosts'
import Cta from '../components/homepage/Cta'
import { makeStyles } from '@material-ui/core/styles'
import dbConnection from '../utils/dbConnection'
import Product from '../models/Product'
import infinity from '../public/infinity.svg'
import CircularProgress from '@material-ui/core/CircularProgress'
const styles = theme => ({
  root: {
    marginTop: '70px'
  },
  loaderWrap: {
    width: '100%',
    height: 'calc(100vh - 70px)',
    display: 'flex',
    marginTop: '70px',
    background: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '150px',
    height: '150px'
  }
})

const useStyles = makeStyles(styles)

export default function Home({ posts }) {
  const classes = useStyles()
  const [isLoading, setLoading] = useState(false)
  const latestPosts = JSON.parse(posts)
  const { src: infinitySrc } = infinity
  const loader = (
    <div className={classes.loaderWrap} >
      <img alt='loading' className={classes.img} src={infinitySrc} />
    </div>
  )
  return (
    isLoading ? loader : (
      <div className={classes.root} >
        <Main />
        <Features />
        <LatestPosts posts={latestPosts} setLoading={setLoading} />
        <Cta />
      </div>
    )
  )
}

export async function getServerSideProps(context) {
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
}
