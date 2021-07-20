import React, { useState, useContext, memo, useEffect } from 'react'
import { BackDropDispatch } from '../contexts/backdrop.context'
import styles from '../../styles/showPage/showPage.styles'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import FullscreenCarousel from './FullscreenCarousel'
import ShareProduct from './ShareProduct'
import Carousel from './Carousel'
import AddtoFavourite from './AddtoFavourite'
import ShareDialog from './ShareDialog'
import { useSession } from 'next-auth/client'
import Loader from '../Loader'
import HeadTags from '../seo/Head'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Keywords from './Keywords'
import Contact from './Contact'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
import SettingsPopover from './SettingsPopover'
import Error from '../Error'
import Settings from './Settings'
import ConfirmationDialog from './ConfirmationDialog'
import shoes from '../../public/shoes.png'
import { ShowPageContext, ShowPageDispatch } from '../contexts/showPage.context'
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const useStyles = makeStyles(styles)

function ShowPage({ product }) {
    const state = useContext(ShowPageContext)
    const dispatch = useContext(ShowPageDispatch)
    const toggleModalDsp = useContext(BackDropDispatch)
    const classes = useStyles()
    useEffect(() => {
        toggleModalDsp({ type: 'closeBackDrop' })
    }, [])
    const [session, loading] = useSession()
    const popoverOpen = Boolean(state.anchorEl)
    if (loading) return <Loader />
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
        _id,
        date,
        keywords,
        name,
        photos,
        title,
        telephone,
        favouritedBy,
        whatsapp,
        category,
        slug,
        description,
        price,
        seller,
        currency,
        email
    } = JSON.parse(product)
    return (
        <div className={classes.root} >
            <HeadTags
                title={`al-bli / ${title.slice(0, 40)}`}
                description={description.slice(0, 100)}
                keywords={keywords.join()}
                author={name}
            />
            <FullscreenCarousel
                dialogOpen={state.fullScreenPhoto}
                photos={photos}
            />
            <Carousel
                dispatch={dispatch}
                product={JSON.parse(product)}
            />
            <ConfirmationDialog
                productName={title}
                id={_id}
            />
            <ShareDialog
                open={state.shareDialogOpen}
                url={window.location.href}
                dispatch={dispatch}
            />
            <div className={classes.details} >
                <span className={classes.user} >
                    {seller.profilePic ?
                        <Avatar src={seller.profilePic.url} /> : <Avatar style={{ backgroundColor: '#3291ff' }} >{name[0].toUpperCase()}</Avatar>}
                    <h4 className={classes.username} >{name}</h4>
                    <p className={classes.date} >{timeAgo.format(Date.parse(date))}</p>
                    <ShareProduct classes={classes} />
                    {Boolean(session) && (session.user._id !== seller._id &&
                        <AddtoFavourite
                            favourite={favouritedBy.indexOf(session.user._id) !== -1}
                            productId={_id}
                            accountId={session.user._id}
                        />)}
                    {Boolean(session) && (session.user._id === seller._id && <Settings classes={classes} />)}
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
                {Boolean(session) && (session.user._id === seller._id && <SettingsPopover productId={_id} />)}
                <Divider className={classes.divider} />
            </div>
        </div >
    )
}

export default memo(ShowPage)