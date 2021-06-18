import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import Post from './Post'
import { makeStyles } from '@material-ui/core/styles'
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core'
SwiperCore.use([Pagination, Navigation])

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
        paddingBottom: '35px'
    },
    slide: {
        width: 'auto'
    }
})

const useStyles = makeStyles(styles)

export default function LatestPosts() {
    const classes = useStyles()
    return (
        <>
            <h3 className={classes.h3} >Te fundit</h3>
            <Swiper
                className={classes.root}
                slidesPerView={'auto'}
                spaceBetween={20}
                navigation
                pagination={{
                    'clickable': true
                }}
            >
                <SwiperSlide className={classes.slide} >
                    <Post
                        profilePic=''
                        name='Mateo Malaj'
                        title='Shitet X5 2019 3.5 cdi nafte timon anglez.'
                        date='19/08/2021'
                    />
                </SwiperSlide>
                <SwiperSlide className={classes.slide} >
                    <Post
                        profilePic=''
                        name='Mateo Malaj'
                        title='Shitet X5 2019 3.5 cdi nafte timon anglez.'
                        date='19/08/2021'
                    />
                </SwiperSlide>
                <SwiperSlide className={classes.slide} >
                    <Post
                        profilePic=''
                        name='Mateo Malaj'
                        title='Shitet X5 2019 3.5 cdi nafte timon anglez.'
                        date='19/08/2021'
                    />
                </SwiperSlide>
                <SwiperSlide className={classes.slide} >
                    <Post
                        profilePic=''
                        name='Mateo Malaj'
                        title='Shitet X5 2019 3.5 cdi nafte timon anglez.'
                        date='19/08/2021'
                    />
                </SwiperSlide>
                <SwiperSlide className={classes.slide} >
                    <Post
                        profilePic=''
                        name='Mateo Malaj'
                        title='Shitet X5 2019 3.5 cdi nafte timon anglez.'
                        date='19/08/2021'
                    />
                </SwiperSlide>
                <SwiperSlide className={classes.slide} >
                    <Post
                        profilePic=''
                        name='Mateo Malaj'
                        title='Shitet X5 2019 3.5 cdi nafte timon anglez.'
                        date='19/08/2021'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
