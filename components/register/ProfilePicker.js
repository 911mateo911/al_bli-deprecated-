import React, { useContext, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/login/profilePicker.styles'
import Avatar from '@material-ui/core/Avatar'
import { RegisterFormDispatch } from '../contexts/registerForm.context'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const useStyles = makeStyles(styles)

export default function ProfilePicker({ file }) {
    const classes = useStyles()
    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        multiple: false,
        accept: 'image/*',
        onDrop: acceptedFile => {
            dispatch({
                type: 'onChange',
                name: 'profilePic',
                value: acceptedFile.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
            })
        }
    })
    useEffect(() => {
        if (file.length === 0) URL.revokeObjectURL(file.preview)
    }, [file])
    const dispatch = useContext(RegisterFormDispatch)
    return (
        <section className={classes.root}>
            <div {...getRootProps({ className: 'profilePicDropZone' })}>
                <input {...getInputProps()} />
                <Avatar className={classes.avatarWrap} >
                    {file.length ?
                        <img src={file[0].preview} className={classes.profile} />
                        : <PhotoCameraIcon className={classes.avatar} />}
                </Avatar>
                <h1 className={classes.h1} >Zgjidhni nje foto profili (Opsionale).</h1>
            </div>
            {file.length > 0 && <DeleteOutlineIcon onClick={() => dispatch({ type: 'deletePhoto' })} className={classes.deleteIcon} />}
        </section>
    )
}
