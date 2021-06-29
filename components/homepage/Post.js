import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
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

const useStyles = makeStyles(styles)

export default function Post({ profilePic, name, setLoading, title, date, price, currency, id, slug }) {
    const classes = useStyles()
    const router = useRouter()
    const getAvatar = () => {
        return (
            profilePic.length ?
                <Avatar className={classes.avatar} src={profilePic} /> :
                <Avatar className={classes.avatar}>
                    {name[0].toUpperCase()}
                </Avatar>
        )
    }
    function handleClick() {
        setLoading(true)
        router.push(`produkt/${id}/${slug}`)
    }
    const cardTitle = title.length > 33 ? `${title.slice(0,30)}...` : title
    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={getAvatar()}
                title={<h2 className={classes.name} >{name}</h2>}
                subheader={<h2 className={classes.date}>{date}</h2>}
            />
            <CardActionArea onClick={handleClick} >
                <CardMedia
                    image='https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620413209/alHotel/vofgvdpwve5nbvx6agky.webp'
                    className={classes.media}
                />
                <CardContent>
                    <h3 className={classes.h3} >{cardTitle}</h3>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
                <h4 className={classes.price} >{`${price} ${currency}`}</h4>
            </CardActions>
        </Card>
    )
}
