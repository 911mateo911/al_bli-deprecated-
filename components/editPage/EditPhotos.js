import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import FilePicker from '../newProduct/FIlePicker'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Swiper, SwiperSlide } from 'swiper/react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import singleRingScaled from '../../public/singleRingScaled.svg'
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import "swiper/swiper.min.css"
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
SwiperCore.use([Pagination, Navigation])

const styles = theme => ({
    '@global': {
        '.swiper-button-next,.swiper-button-prev': {
            color: '#0070f3'
        },
        '.swiper-pagination': {
            bottom: '0 !important'
        }
    },
    root: {
        width: '100%'
    },
    swiper: {
        margin: 0
    },
    h3: {
        margin: 0,
        textAlign: 'center',
        fontFamily: 'Lato',
        fontWeight: '300',
        fontSize: '.8rem'
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        margin: 'auto',
        position: 'relative',
        paddingBottom: '18px'
    },
    imgTint: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        margin: 'auto',
        position: 'relative',
        paddingBottom: '18px',
        filter: 'blur(4px) grayscale(30%)'
    },
    deleteIcon: {
        position: 'absolute',
        top: '1.5rem',
        cursor: 'pointer',
        right: '1.5rem',
        color: '#0070f3',
        padding: '.5rem',
        fontSize: '2.5rem',
        borderRadius: '50%',
        backgroundColor: 'white'
    }
})

const useStyles = makeStyles(styles)

function deleteImage(url, dispatch, list) {
    if (list.indexOf(url) === -1) {
        dispatch({ type: 'onAddToDelete', value: url })
    }
}

function restoreImage(url, dispatch, list) {
    const newArr = list.filter(e => e !== url)
    dispatch({ type: 'onSetToDelete', value: newArr })
}

function EditPhotos({ photos, dispatch, images, toBeDeleted }) {
    const classes = useStyles()
    const renderImgs = images.map((img, i) => {
        const isNotDeleted = toBeDeleted.indexOf(img) === -1
        return (
            <SwiperSlide
                key={i}
            >
                <LazyLoadImage
                    src={img}
                    effect='black-and-white'
                    className={isNotDeleted ? classes.img : classes.imgTint}
                    placeholderSrc={singleRingScaled.src}
                />
                {isNotDeleted ?
                    <DeleteOutlineIcon
                        onClick={() => deleteImage(img, dispatch, toBeDeleted)}
                        className={classes.deleteIcon}
                    /> :
                    <SettingsBackupRestoreIcon
                        onClick={() => restoreImage(img, dispatch, toBeDeleted)}
                        className={classes.deleteIcon}
                    />
                }
            </SwiperSlide>
        )
    })
    return (
        <div className={classes.root} >
            {images.length && <Swiper
                hashNavigation={{
                    "watchState": true
                }}
                spaceBetween={10}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                className={classes.swiper} >
                {renderImgs}
            </Swiper >}
            <FilePicker
                dispatch={dispatch}
                maxCount={10 - images.length}
                files={photos}
            />
            <h3 className={classes.h3} >Maksimumi i fotove qe mund te shtosh eshte 10</h3>
        </div>
    )
}

export default memo(EditPhotos)