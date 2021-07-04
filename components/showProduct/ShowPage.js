import React, { useState, useContext, memo } from 'react'
import styles from '../../styles/showPage/showPage.styles'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from './Carousel'
import { useSession } from 'next-auth/client'
import Loader from '../Loader'
import Avatar from '@material-ui/core/Avatar'
import SettingsIcon from '@material-ui/icons/Settings'
import Divider from '@material-ui/core/Divider'
import Keywords from './Keywords'
import Contact from './Contact'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
import SettingsPopover from './SettingsPopover'
import Error from '../Error'
import ConfirmationDialog from './ConfirmationDialog'
import shoes from '../../public/shoes.png'
import { ShowPageContext, ShowPageDispatch } from '../contexts/showPage.context'
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const useStyles = makeStyles(styles)

function ShowPage({ product }) {
    const state = useContext(ShowPageContext)
    const dispatch = useContext(ShowPageDispatch)
    const classes = useStyles()
    const [session, loading] = useSession()
    if (loading || state.loading) return <Loader />
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
        _id,
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
    return (
        <div className={classes.root} >
            <Carousel product={product} />
            <ConfirmationDialog
                productName={title}
                id={_id}
            />
            <div className={classes.details} >
                <span className={classes.user} >
                    {seller.profilePic ?
                        <Avatar src={seller.profilePic.url} /> : <Avatar>{name[0].toUpperCase()}</Avatar>}
                    <h4 className={classes.username} >{name}</h4>
                    <p className={classes.date} >{timeAgo.format(Date.parse(date))}</p>
                    {Boolean(session) && (session.user._id === seller._id && <SettingsIcon
                        onClick={e => dispatch({ type: 'openPopover', target: e.currentTarget })}
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
                {Boolean(session) && (session.user._id === seller._id && <SettingsPopover
                    popoverOpen={popoverOpen}
                    closePopover={() => dispatch({ type: 'closePopover' })}
                    anchorEl={state.anchorEl}
                    openDialog={() => dispatch({ type: 'openDialog' })}
                />)}
                <Divider className={classes.divider} />
            </div>
        </div >
    )
}

export default memo(ShowPage)