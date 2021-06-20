import React from 'react'
import styles from '../../styles/showPage/showPage.styles'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from './Carousel'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Keywords from './Keywords'
import Contact from './Contact'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
import Error from '../Error'
import shoes from '../../public/shoes.png'
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const useStyles = makeStyles(styles)

export default function ShowPage({ product }) {
    const classes = useStyles()
    if (product.error) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
    const {
        date,
        keywords,
        name,
        title,
        telephone,
        whatsapp,
        category,
        description,
        price,
        currency,
        email
    } = JSON.parse(product)
    return (
        <div className={classes.root} >
            <Carousel product={JSON.parse(product)} />
            <div className={classes.details} >
                <span className={classes.user} >
                    <Avatar alt={name} src='https://images.unsplash.com/photo-1571224736343-7182962ae3e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80' />
                    <h4 className={classes.username} >{name}</h4>
                    <p className={classes.date} >{timeAgo.format(Date.parse(date))}</p>
                </span>
                <Divider className={classes.divider} />
                <h1 className={classes.h1} >
                    {title}
                </h1>
                <Contact
                    email={email}
                    whatsapp={whatsapp}
                    telephone={telephone}
                />
                <Keywords list={keywords} />
                <Divider className={classes.divider} />
                <div className={classes.description} >
                    {description}
                </div>
                <Divider className={classes.divider} />
            </div>
        </div >
    )
}
