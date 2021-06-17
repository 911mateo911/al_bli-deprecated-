import Main from '../components/homepage/Main'
import Features from '../components/homepage/Features'
import LatestPosts from '../components/homepage/LatestPosts'
import Cta from '../components/homepage/Cta'
import { makeStyles } from '@material-ui/core/styles'
const styles = theme => ({
  root: {
    marginTop: '70px'
  }
})

const useStyles = makeStyles(styles)

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root} >
      <Main />
      <Features />
      <LatestPosts />
      <Cta />
    </div>
  )
}
