import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ProfileHead from './ProfileHead'
import Error from '../Error'
import shoes from '../../public/shoes.png'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
    root: {
        maxWidth: '960px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})

const useStyles = makeStyles(styles)

export default function ProfilePage({ user, products }) {
    const classes = useStyles()
    if (user.error) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
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
        </div>
    )
}
