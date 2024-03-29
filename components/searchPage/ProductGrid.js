import React, { useContext, memo } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { SearchDispatch } from '../contexts/search.context'
import doubleRing from '../../public/doubleRing.svg'
import singleRing from '../../public/singleRing.svg'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
import HorizontalPost from './HorizontalPost'
import VisibilityChecker from './VisibilityChecker'
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const styles = theme => ({
    root: {
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    h1: {
        fontWeight: '600',
        fontFamily: 'Lato',
        margin: '0',
        marginTop: '70px',
        fontSize: '1.6rem'
    },
    loader: {
        width: '100px',
        height: '100px',
        marginTop: '70px'
    },
    divider: {
        width: '100%',
        marginBottom: '2.5px'
    },
    results: {
        fontWeight: 400,
        fontSize: '1.5rem',
        fontFamily: 'Source Sans Pro',
        margin: 0,
        width: '100%'
    }
})

const useStyles = makeStyles(styles)

function ProductGrid({ products, gridLoading }) {
    const classes = useStyles()
    const dispatch = useContext(SearchDispatch)
    function setLoading(boolean) {
        dispatch({ type: 'setPageLoading', value: boolean })
    }
    const isEmpty = !products.length
    if (gridLoading) {
        return <img className={classes.loader} src={doubleRing.src} />
    }
    if (isEmpty) {
        return (
            <h1 className={classes.h1} >Nuk u gjet asnje rezultat</h1>
        )
    }
    return (
        <div className={classes.root} >
            <h1 className={classes.results} >Rezultate:</h1>
            <Divider className={classes.divider} />
            <Grid container justify='space-evenly'>
                {products.map((e, i) => {
                    return (
                        <HorizontalPost
                            key={i}
                            favouritedBy={e.favouritedBy}
                            profilePic={e.seller.profilePic || ''}
                            name={e.name}
                            seller={e.seller}
                            title={e.title}
                            price={e.price}
                            currency={e.currency}
                            setLoading={setLoading}
                            id={e._id}
                            photo={e.photos[0] || ''}
                            slug={e.slug}
                            dispatch={dispatch}
                            date={timeAgo.format(Date.parse(e.date))}
                        />
                    )
                })}
            </Grid>
            <VisibilityChecker />
        </div>
    )
}

export default memo(ProductGrid)