import React, { memo, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import "swiper/components/navigation/navigation.min.css"
import "swiper/swiper.min.css"
import { ShowPageDispatch } from '../contexts/showPage.context'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Swiper, SwiperSlide } from "swiper/react"
import singleRingScaled from '../../public/singleRingScaled.svg'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
SwiperCore.use([Pagination, Navigation])

const styles = theme => ({
    paper: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        margin: '0',
        width: '75%',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    fullScreen: {
        position: 'absolute',
        bottom: '22px',
        borderRadius: '5px 0 0 0',
        color: '#3291ff',
        padding: '8px',
        backgroundColor: 'white',
        right: '0',
        zIndex: '100',
        "&:hover": {
            backgroundColor: 'white'
        }
    },
    wrapper: {
        position: 'relative',
        margin: 'auto',
        width: '100%'
    },
    image: {
        width: 'calc(100% + 20px)',
        height: '100%',
        objectFit: 'cover',
        margin: 'auto',
        paddingBottom: '18px'
    }
})

const useStyles = makeStyles(styles)

function FullscreenCarousel({ dialogOpen, photos }) {
    const classes = useStyles()
    const dispatch = useContext(ShowPageDispatch)
    const renderImgs = photos.map((img, i) => {
        return (
            <SwiperSlide
                key={i}
            >
                <LazyLoadImage
                    src={img.url}
                    effect='black-and-white'
                    className={classes.image}
                    placeholderSrc={singleRingScaled.src}
                />
            </SwiperSlide>
        )
    })
    return (
        <Dialog
            fullWidth
            maxWidth='xl'
            open={dialogOpen}
            classes={{ paper: classes.paper }}
            onClose={() => dispatch({ type: 'closeFullScreenPhotos' })}
            keepMounted
        >
            <div className={classes.wrapper} >
                <Swiper
                    hashNavigation={{
                        "watchState": true
                    }}
                    spaceBetween={30}
                    navigation={true} >
                    {renderImgs}
                </Swiper >
                <IconButton
                    className={classes.fullScreen}
                    onClick={() => dispatch({ type: 'closeFullScreenPhotos' })}>
                    <FullscreenExitIcon />
                </IconButton>
            </div>
        </Dialog>
    )
}

export default memo(FullscreenCarousel)