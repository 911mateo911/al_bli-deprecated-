import React, { memo } from 'react'
import IconButton from '@material-ui/core/IconButton';
import { Swiper, SwiperSlide } from "swiper/react"
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/showPage/carousel.styles'
import ProdDetails from './ProdDetails'
import "swiper/swiper.min.css"
import singleRingScaled from '../../public/singleRingScaled.svg'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
SwiperCore.use([Pagination, Navigation])

const useStyles = makeStyles(styles)

function Carousel({ product, dispatch }) {
    const classes = useStyles()
    const firstThree = product.photos.slice(0, 3).map((img, i) => {
        return (<SwiperSlide
            key={i}
        >
            <img
                src={img.url}
                className={classes.img}
            />
        </SwiperSlide>)
    })
    const lazyLoaded = product.photos.slice(3).map((img, i) => {
        return (
            <SwiperSlide
                key={i + 3}
            >
                <LazyLoadImage
                    src={img.url}
                    effect='black-and-white'
                    className={classes.img}
                    placeholderSrc={singleRingScaled.src}
                />
            </SwiperSlide>
        )
    })
    const renderImgs = firstThree.concat(lazyLoaded)
    return (
        <span className={classes.span} >
            <Swiper
                hashNavigation={{
                    "watchState": true
                }}
                spaceBetween={10}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                className={classes.root} >
                {product.photos.length > 0 ? renderImgs.map(e => e) : (
                    <SwiperSlide>
                        <LazyLoadImage
                            src='https://res.cloudinary.com/dxtjwhnoz/image/upload/c_mpad,h_2160,w_3840/v1624539769/no-photos_p4vnkf.png'
                            effect='black-and-white'
                            className={classes.img}
                        />
                    </SwiperSlide>
                )}
                {product.photos.length > 1 &&
                    (<IconButton
                        className={classes.fullScreen}
                        onClick={() => dispatch({ type: 'openFullScreenPhotos' })}>
                        <FullscreenIcon />
                    </IconButton>)
                }
            </Swiper >
            <ProdDetails product={product} category={product.category} />
        </span>
    )
}

export default memo(Carousel)