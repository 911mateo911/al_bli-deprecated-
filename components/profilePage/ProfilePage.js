import React, { useContext } from 'react'
import { ProfilePageCTX, ProfilePageDSC } from '../contexts/profilePage.context'
import { makeStyles } from '@material-ui/core/styles'
import ProfileHead from './ProfileHead'
import Error from '../Error'
import ShareDialog from '../showProduct/ShareDialog'
import shoes from '../../public/shoes.png'
import Divider from '@material-ui/core/Divider'
import Loader from '../Loader'
import ProfilePostsGrid from './ProfilePostsGrid'

const styles = theme => ({
    root: {
        maxWidth: '960px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '5px'
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

export default function ProfilePage({ user, products }) {
    const classes = useStyles()
    const state = useContext(ProfilePageCTX)
    const dispatch = useContext(ProfilePageDSC)
    if (user.error) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
    if (state.pageLoading) return <Loader />
    const {
        avatarColor,
        name,
        email,
        _id,
        telephone,
        profilePic,
    } = JSON.parse(user)
    const myProd = JSON.parse(products)
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
            {myProd.length > 0 ?
                <ProfilePostsGrid
                    products={myProd}
                    profilePic={profilePic}
                    seller={
                        {
                            _id: _id
                        }
                    }
                /> :
                <h1 className={classes.h1} >Nuk u gjet asnje postim</h1>
            }
        </div>
    )
}
