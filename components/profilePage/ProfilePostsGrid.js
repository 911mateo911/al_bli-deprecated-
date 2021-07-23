import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimeAgo from 'javascript-time-ago'
import Grid from '@material-ui/core/Grid'
import sq from 'javascript-time-ago/locale/sq'
import HorizontalPost from '../searchPage/HorizontalPost'
import { ProfilePageCTX, ProfilePageDSC } from '../contexts/profilePage.context'
import { BackDropDispatch } from '../contexts/backdrop.context'
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90%'
    },
    h1: {
        fontFamily: 'Lato',
        fontWeight: '500',
        margin: '10px',
        textAlign: 'center',
        fontSize: '1.5rem'
    }
})

const useStyles = makeStyles(styles)

export default function ProfilePostsGrid({ products }) {
    const classes = useStyles()
    const state = useContext(ProfilePageCTX)
    const dispatch = useContext(ProfilePageDSC)
    const backDropDSC = useContext(BackDropDispatch)
    function setLoading() {
        dispatch({ type: 'setTabIndex', value: 0 })
        backDropDSC({ type: 'openBackDrop' })
    }
    return (
        <div className={classes.root} >
            <Grid container justify='space-evenly' >
                {products.length === 0 && <h1 className={classes.h1} >Nuk u gjet asnje postim</h1>}
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
        </div>
    )
}
