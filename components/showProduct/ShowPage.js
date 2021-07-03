import React, { useState } from 'react'
import styles from '../../styles/showPage/showPage.styles'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from './Carousel'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import Divider from '@material-ui/core/Divider'
import Keywords from './Keywords'
import popoverHook from '../hooks/popover.hook'
import Contact from './Contact'
import { useSession } from 'next-auth/client'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
import SettingsPopover from './SettingsPopover'
import Error from '../Error'
import shoes from '../../public/shoes.png'
import { FlashMsgContext } from '../contexts/flashMsgs.context'
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const useStyles = makeStyles(styles)

export default function ShowPage({ product, session }) {
    const [state, openPopover, closePopover] = popoverHook({ anchorEl: null })
    const classes = useStyles()
    if (!product) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
    const popoverOpen = Boolean(state.anchorEl)
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
        seller,
        currency,
        email
    } = product
    console.log('component rerender')
    return (
        <div className={classes.root} >
            <Carousel product={product} />
            <div className={classes.details} >
                <span className={classes.user} >
                    <Avatar alt={name} src='https://images.unsplash.com/photo-1571224736343-7182962ae3e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80' />
                    <h4 className={classes.username} >{name}</h4>
                    <p className={classes.date} >{timeAgo.format(Date.parse(date))}</p>
                    {Boolean(session) && (session.user._id === seller && <SettingsIcon
                        onClick={openPopover}
                        className={popoverOpen ? classes.settingsTilt : classes.settings}
                    />)}
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
                {Boolean(session) && (session.user._id === seller && <SettingsPopover
                    popoverOpen={popoverOpen}
                    anchorEl={state.anchorEl}
                    closePopover={closePopover}
                />)}
                <Divider className={classes.divider} />
            </div>
        </div >
    )
}
