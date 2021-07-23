import React, { useContext, useEffect } from 'react'
import { ProfilePageCTX, ProfilePageDSC } from '../contexts/profilePage.context'
import { makeStyles } from '@material-ui/core/styles'
import ProfileHead from './ProfileHead'
import Error from '../Error'
import ShareDialog from '../showProduct/ShareDialog'
import { useSession } from 'next-auth/client'
import shoes from '../../public/shoes.png'
import Divider from '@material-ui/core/Divider'
import Loader from '../Loader'
import ProfilePostsGrid from './ProfilePostsGrid'
import TabBar from './TabBar'

const styles = theme => ({
    root: {
        maxWidth: '960px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '5px'
    }
})

const useStyles = makeStyles(styles)

export default function ProfilePage({ user, products, favouritedPosts }) {
    const classes = useStyles()
    const state = useContext(ProfilePageCTX)
    const dispatch = useContext(ProfilePageDSC)
    const [session, loading] = useSession()
    if (user.error) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
    if (loading) return <Loader />
    const {
        avatarColor,
        name,
        email,
        _id,
        telephone,
        profilePic,
    } = JSON.parse(user)
    const myProd = JSON.parse(products)
    const favPosts = JSON.parse(favouritedPosts)
    const isOwner = Boolean(session) && (session.user._id === _id)
    const toBeShown = isOwner ?
        (state.tabIndex ? favPosts : myProd)
        : myProd
    return (
        <div className={classes.root} >
            <ProfileHead
                profilePic={profilePic}
                email={email}
                name={name}
                telephone={telephone}
                avatarColor={avatarColor}
            />
            <ShareDialog
                url={state.dialogUrl}
                open={state.shareDialogOpen}
                dispatch={dispatch}
            />
            <TabBar
                value={state.tabIndex}
                isOwner={isOwner}
            />
            <ProfilePostsGrid
                products={toBeShown}
                profilePic={profilePic}
                seller={
                    {
                        _id: _id
                    }
                }
            />
        </div>
    )
}
