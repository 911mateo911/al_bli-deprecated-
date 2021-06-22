import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { makeStyles } from '@material-ui/core/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/showPage/carousel.styles'
import ProdDetails from './ProdDetails'
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

const images = [
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620413209/alHotel/vofgvdpwve5nbvx6agky.webp',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620413218/alHotel/knkvozniw38vvixfgw9p.jpg',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620413222/alHotel/tav2su5nzov0eejnfuvc.jpg',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620407338/alHotel/jusumydp3a9a1x7kmnsr.jpg',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620407338/alHotel/vjhocsfdjekplnp9zny7.jpg',
    'https://res.cloudinary.com/dxtjwhnoz/image/upload/v1620407338/alHotel/qg8kw7ozp0kkwoq70tcr.jpg'
]

const useStyles = makeStyles(styles)

export default function Carousel({ product }) {
    const classes = useStyles()
    const renderImgs = images.map((img, i) => {
        return (
            <SwiperSlide
                key={i}
            >
                <LazyLoadImage
                    src={img}
                    effect='black-and-white'
                    className={classes.img}
                />
            </SwiperSlide>
        )
    })
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
                {renderImgs}
            </Swiper >
            <ProdDetails product={product} category={product.category} />
        </span>
    )
}
