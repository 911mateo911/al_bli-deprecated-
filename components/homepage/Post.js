import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BackDropDispatch } from '../contexts/backdrop.context'
import { ProfilePageDSC } from '../contexts/profilePage.context'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CardActionArea from '@material-ui/core/CardActionArea'
import styles from '../../styles/index/post.styles'
import { SearchDispatch } from '../contexts/search.context'
import AddtoFavourite from '../showProduct/AddtoFavourite'

const useStyles = makeStyles(styles)

export default function Post({
    photo,
    favouritedBy,
    profilePic,
    name,
    seller,
    setLoading,
    title,
    date,
    price,
    currency,
    id,
    slug
}) {
    const classes = useStyles()
    const router = useRouter()
    const [session, loading] = useSession()
    const dispatch = useContext(BackDropDispatch)
    const searchDSP = useContext(SearchDispatch)
    const profileDSP = useContext(ProfilePageDSC)
    function goTo() {
        profileDSP({ type: 'setTabIndex', value: 0 })
        dispatch({ type: 'openBackDrop' })
        router.push(`/perdorues/${seller._id}`)
    }
    const getAvatar = () => {
        return (
            profilePic ?
                <Avatar
                    onClick={goTo}
                    className={classes.avatar}
                    src={profilePic.url}
                /> :
                <Avatar
                    className={classes.avatar}
                    onClick={goTo}
                    style={{ backgroundColor: seller.avatarColor }}
                >
                    {name[0].toUpperCase()}
                </Avatar>
        )
    }
    function handleClick() {
        dispatch({ type: 'openBackDrop' })
        router.push(`/produkt/${id}/${slug}`)
    }
    function handleShare() {
        searchDSP({ type: 'setDialogUrl', value: `${window.location.host}/produkt/${id}/${slug}` })
        searchDSP({ type: 'openShareDialog' })
    }
    const image = photo ? photo.url : 'https://res.cloudinary.com/dxtjwhnoz/image/upload/c_mpad,h_2160,w_3840/v1624539769/no-photos_p4vnkf.png'
    const cardTitle = title.length > 33 ? `${title.slice(0, 30)}...` : title
    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={getAvatar()}
                title={<h2 onClick={goTo} className={classes.name} >{name}</h2>}
                subheader={<h2 className={classes.date}>{date}</h2>}
            />
            <CardActionArea onClick={handleClick} >
                <CardMedia
                    image={image}
                    className={classes.media}
                />
                <CardContent>
                    <h3 className={classes.h3} >{cardTitle}</h3>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                {(Boolean(session) && (session.user._id !== seller._id)) &&
                    <AddtoFavourite
                        inPost
                        productId={id}
                        accountId={session.user._id}
                        favourite={favouritedBy.indexOf(session.user._id) !== -1}
                    />}
                <IconButton
                    onClick={handleShare}
                >
                    <ShareIcon />
                </IconButton>
                <h4 className={classes.price} >{`${price} ${currency}`}</h4>
            </CardActions>
        </Card>
    )
}
