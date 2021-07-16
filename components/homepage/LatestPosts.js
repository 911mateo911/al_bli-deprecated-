import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import Post from './Post'
import { makeStyles } from '@material-ui/core/styles'
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { useMediaQuery } from '@material-ui/core'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
import styles from '../../styles/index/latestPosts.styles'
import shoes from '../../public/shoes.png'
import Image from 'next/image'
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core'
SwiperCore.use([Pagination, Navigation])
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const useStyles = makeStyles(styles)

export default function LatestPosts({ posts, setLoading }) {
    const classes = useStyles()
    const { src: shoesPng } = shoes
    const errorMsg = (
        <>
            <h3 className={classes.h3} >Te fundit</h3>
            <div className={classes.errorWrap} >
                <Image
                    src={shoesPng}
                    className={classes.errorImg}
                    width={300}
                    height={300}
                    alt='Didnt get anything back'
                />
                <p className={classes.errorMsg} >Pati nje problem!</p>
            </div>
        </>
    )
    if (posts.error) return errorMsg
    const latestPosts = JSON.parse(posts)
    const cleanPosts = latestPosts.filter(e => e.seller != null)
    const isMobile = useMediaQuery('(max-width:600px)')
    return (
        <>
            <h3 className={classes.h3} >Te fundit</h3>
            <Swiper
                className={classes.root}
                slidesPerView={'auto'}
                spaceBetween={20}
                centeredSlides={isMobile}
                navigation
                pagination={{
                    'clickable': true
                }}
            >
                {cleanPosts.map((e, i) => {
                    return (
                        <SwiperSlide className={classes.slide} key={i} >
                            <Post
                                profilePic={e.seller.profilePic || ''}
                                name={e.name}
                                seller={e.seller}
                                title={e.title}
                                favouritedBy={e.favouritedBy}
                                price={e.price}
                                currency={e.currency}
                                setLoading={setLoading}
                                id={e._id}
                                photo={e.photos[0] || ''}
                                slug={e.slug}
                                date={timeAgo.format(Date.parse(e.date))}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
