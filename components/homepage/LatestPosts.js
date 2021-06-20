import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import Post from './Post'
import { makeStyles } from '@material-ui/core/styles'
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { useMediaQuery } from '@material-ui/core'
import TimeAgo from 'javascript-time-ago'
import sq from 'javascript-time-ago/locale/sq'
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core'
SwiperCore.use([Pagination, Navigation])
TimeAgo.addLocale(sq)
const timeAgo = new TimeAgo('sq')

const styles = theme => ({
    '@global': {
        '.swiper-button-next,.swiper-button-prev': {
            color: '#0070f3',
            marginTop: '-35px'
        }
    },
    h3: {
        color: '#111',
        fontFamily: 'Source Sans Pro',
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '25px',
        margin: '10px'
    },
    root: {
        width: '95%',
        margin: 'auto',
        marginTop: '0',
        paddingBottom: '35px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    slide: {
        width: 'auto'
    }
})

const useStyles = makeStyles(styles)

export default function LatestPosts({ posts }) {
    const classes = useStyles()
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
                {posts.map((e, i) => {
                    return (
                        <SwiperSlide className={classes.slide} key={i} >
                            <Post
                                profilePic=''
                                name={e.name}
                                title={e.title}
                                date={timeAgo.format(Date.parse(e.date))}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
