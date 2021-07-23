import React, { memo, useContext } from 'react'
import styles from '../../styles/horizontalPost/horizontalPost.styles'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import AddtoFavourite from '../showProduct/AddtoFavourite'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import CardHeader from '@material-ui/core/CardHeader'
import EditIcon from '@material-ui/icons/Edit'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import { ProfilePageDSC } from '../contexts/profilePage.context'

const useStyles = makeStyles(styles)

function HorizontalPost({
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
    slug,
    dispatch
}) {
    const classes = useStyles()
    const router = useRouter()
    const profileDSC = useContext(ProfilePageDSC)
    const [session, loading] = useSession()
    const image = photo ? photo.url : 'https://res.cloudinary.com/dxtjwhnoz/image/upload/c_mpad,h_2160,w_3840/v1624539769/no-photos_p4vnkf.png'
    function goTo() {
        profileDSC({ type: 'setTabIndex', value: 0 })
        setLoading(true)
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
                    onClick={goTo}
                    className={classes.avatar}
                    style={{ backgroundColor: seller.avatarColor }}
                >
                    {name[0].toUpperCase()}
                </Avatar>
        )
    }
    function handleClick() {
        setLoading(true)
        router.push(`/produkt/${id}/${slug}`)
    }
    function openDialog() {
        dispatch({ type: 'setDialogUrl', value: `${window.location.host}/produkt/${id}/${slug}` })
        dispatch({ type: 'openShareDialog' })
    }
    function handleEdit() {
        setLoading(true)
        router.push(`/produkt/ndrysho/${id}`)
    }
    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={getAvatar()}
                title={<h2 onClick={goTo} className={classes.name} >{name}</h2>}
                subheader={<h2 className={classes.date}>{date}</h2>}
            />
            <div className={classes.actionArea} >
                <CardActionArea onClick={handleClick} className={classes.cardAction} >
                    <CardMedia
                        image={image}
                        className={classes.media}
                    />
                </CardActionArea>
                <div className={classes.actionBtn}>
                    {(Boolean(session) && (session.user._id !== seller._id)) &&
                        <AddtoFavourite
                            inPost
                            productId={id}
                            accountId={session.user._id}
                            favourite={favouritedBy.indexOf(session.user._id) !== -1}
                        />}
                    {(Boolean(session) && (session.user._id === seller._id)) &&
                        <IconButton onClick={handleEdit} >
                            <EditIcon />
                        </IconButton>
                    }
                    <IconButton onClick={openDialog}>
                        <ShareIcon />
                    </IconButton>
                </div>
            </div>
            <CardContent
                className={classes.content}
            >
                <h3 className={classes.h3} >{title}</h3>
            </CardContent>
            <CardActions>
                <h4 className={classes.price} >{`${price} ${currency}`}</h4>
            </CardActions>
        </Card >
    )
}

export default memo(HorizontalPost)