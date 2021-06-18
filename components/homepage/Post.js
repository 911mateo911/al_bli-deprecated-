import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '350px',
        minWidth: '300px',
        boxShadow: '0 2px 7px 0 rgb(0 0 0 / 5%)',
        border: '.5px solid #eaeaea',
        '&:hover': {
            boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    h3: {
        fontFamily: 'Lato',
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.8)',
        margin: '0',
        overflowX: 'hidden',
        width: '100%',
        textOverflow: 'ellipsis'
    },
    avatar: {
        backgroundColor: '#4caf50',
    },
    date: {
        fontFamily: 'Source Sans Pro',
        margin: '0',
        fontSize: '.9rem',
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.8)'
    },
    name: {
        margin: '0',
        fontFamily: 'Source Sans Pro',
        color: 'rgba(0,0,0,0.9)',
        fontSize: '1rem',
        fontWeight: '600',
    }
}))

export default function Post({ profilePic, name, title, date }) {
    const classes = useStyles()
    const getAvatar = () => {
        return (
            profilePic.length ?
                <Avatar className={classes.avatar} src={profilePic} /> :
                <Avatar className={classes.avatar}>
                    {name[0]}
                </Avatar>
        )
    }
    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={getAvatar()}
                title={<h2 className={classes.name} >{name}</h2>}
                subheader={<h2 className={classes.date}>{date}</h2>}
            />
            <CardActionArea>
                <CardMedia
                    image='https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620413209/alHotel/vofgvdpwve5nbvx6agky.webp'
                    className={classes.media}
                />
                <CardContent>
                    <h3 className={classes.h3} >{title}</h3>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
