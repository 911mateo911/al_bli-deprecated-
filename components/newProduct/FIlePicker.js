import React, { useEffect, memo } from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core'
import styles from '../../styles/newProduct/filePicker.styles'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import Button from '@material-ui/core/Button'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import "swiper/components/pagination/pagination.min.css"
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import SwiperCore, { Pagination } from 'swiper/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
SwiperCore.use([Pagination])

const useStyles = makeStyles(styles)

function FilePicker({ files, maxCount, dispatch }) {
    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            dispatch({
                type: 'onSetPhotos',
                photos: acceptedFiles.slice(0, maxCount).map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            })
        }
    })
    useEffect(() => () => {
        if (files.length === 0) {
            files.forEach(file => URL.revokeObjectURL(file.preview))
        }
    }, [files])
    function deleteAllFiles() {
        dispatch({
            type: 'onSetPhotos',
            photos: []
        })
    }
    function deleteFile(element) {
        const newFiles = files.filter(e => e.path !== element.path)
        files.forEach(e => {
            if (e.path === element.path) {
                return URL.revokeObjectURL(e.preview)
            }
        })
        dispatch({
            type: 'onSetPhotos',
            photos: newFiles
        })
    }
    const classes = useStyles()
    const imgUrl = 'https://api.iconify.design/clarity:image-gallery-line.svg?color=%233291ff'
    return (
        <>
            <section className={classes.root}>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <h1 className={classes.h1} >Terhiq ose kliko ketu per te shtuar foto.</h1>
                    <div className={classes.img} style={{ background: `url(${imgUrl}) no-repeat center center / contain` }} ></div>
                </div>
            </section>
            {files.length > 0 && (
                <>
                    <Swiper
                        className={classes.swiper}
                        direction={'vertical'}
                        pagination={{
                            "clickable": true
                        }}
                        spaceBetween={10}
                    >
                        {files.map((file, i) => (
                            <SwiperSlide key={i} className={classes.slide} >
                                <DeleteOutlineIcon
                                    className={classes.delete}
                                    onClick={() => deleteFile(file)}
                                />
                                <img src={file.preview} className={classes.slideImg} />
                            </SwiperSlide>))}
                    </Swiper>
                    <Button
                        onClick={deleteAllFiles}
                        className={classes.deleteAll}
                        variant='text'
                        startIcon={<ClearAllIcon className={classes.clear} />}
                    >
                        Pastro te gjitha
                    </Button>
                </>
            )}
        </>
    )
}

export default memo(FilePicker)