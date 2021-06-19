import Main from '../components/homepage/Main'
import Features from '../components/homepage/Features'
import LatestPosts from '../components/homepage/LatestPosts'
import Cta from '../components/homepage/Cta'
import { makeStyles } from '@material-ui/core/styles'
import dbConnection from '../utils/dbConnection'
import Product from '../models/Product'
const styles = theme => ({
  root: {
    marginTop: '70px'
  }
})

const useStyles = makeStyles(styles)

export default function Home({ posts }) {
  const classes = useStyles()
  const latestPosts = JSON.parse(posts)
  return (
    <div className={classes.root} >
      <Main />
      <Features />
      <LatestPosts posts={latestPosts} />
      <Cta />
    </div>
  )
}

export async function getServerSideProps(context) {
  await dbConnection()
  const latestPosts = await Product.find({})
    .sort({
      rating: 1,
      date: 1
    })
    .limit(10)
  return {
    props: {
      posts: JSON.stringify(latestPosts)
    }
  }
}
