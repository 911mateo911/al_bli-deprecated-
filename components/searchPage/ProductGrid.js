import React, { useContext, memo } from 'react'
import Post from '../homepage/Post'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { SearchContext } from '../contexts/search.context'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const styles = theme => ({
    h1: {
        fontWeight: '600',
        fontFamily: 'Lato',
        margin: '0',
        marginTop: '70px',
        fontSize: '1.6rem'
    }
})

const useStyles = makeStyles(styles)

function ProductGrid({ products }) {
    const classes = useStyles()
    const isEmpty = !products.length
    if (isEmpty) {
        return (
            <h1 className={classes.h1} >Nuk u gjet asnje rezultat</h1>
        )
    }
    return (
        <Grid container>
            {products.map((e, i) => {
                return (
                    <Post
                        key={i}
                        profilePic={e.seller.profilePic || ''}
                        name={e.name}
                        title={e.title}
                        price={e.price}
                        currency={e.currency}
                        id={e._id}
                        photo={e.photos[0] || ''}
                        slug={e.slug}
                        date={timeAgo.format(Date.parse(e.date))}
                    />
                )
            })}
        </Grid>
    )
}

export default memo(ProductGrid)