import React from 'react'
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
import DeleteIcon from '@material-ui/icons/Delete';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(styles)

export default function HorizontalPost({
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
    const image = photo ? photo.url : 'https://res.cloudinary.com/dxtjwhnoz/image/upload/c_mpad,h_2160,w_3840/v1624539769/no-photos_p4vnkf.png'
    const getAvatar = () => {
        return (
            profilePic ?
                <Avatar className={classes.avatar} src={profilePic.url} /> :
                <Avatar className={classes.avatar}>
                    {name[0].toUpperCase()}
                </Avatar>
        )
    }
    function handleClick() {
        setLoading(true)
        router.push(`produkt/${id}/${slug}`)
    }
    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={getAvatar()}
                title={<h2 className={classes.name} >{name}</h2>}
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
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    }
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </div>
            </div>
            <CardContent>
                <h3 className={classes.h3} >{title}</h3>
            </CardContent>
            <CardActions>
                <h4 className={classes.price} >{`${price} ${currency}`}</h4>
            </CardActions>
        </Card>
    )
}