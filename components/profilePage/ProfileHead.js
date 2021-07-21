import React from 'react'
import styles from '../../styles/profilePage/profile.styles'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import EmailIcon from '@material-ui/icons/Email'
import Button from '@material-ui/core/Button'
import CallIcon from '@material-ui/icons/Call'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import FadeInHOC from '../homepage/FadeInHOC'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(styles)

export default function ProfileHead({
    profilePic,
    name,
    email,
    telephone,
    avatarColor
}) {
    const avtProp = { color: avatarColor } // idk why mui needs this but ok
    const classes = useStyles(avtProp)
    const copyBtn = (txt) => (
        <CopyToClipboard
            text={txt}
        >
            <Button
                className={classes.copyBtn}
                startIcon={
                    <FileCopyIcon className={classes.copyIcon} />
                }>
                <p className={classes.copy} >Kopjo</p>
            </Button>
        </CopyToClipboard>
    )
    return (
        <>
            <div className={classes.root} >
                <span className={[classes.actBtn, classes.hideOnMob].join(' ')} >
                    <FadeInHOC
                        seconds={0.9}
                    >
                        <EmailIcon className={classes.icon} />
                    </FadeInHOC>
                    <p className={classes.p} >{email}</p>
                    {copyBtn(email)}
                </span>
                <span className={classes.actBtn} >
                    <FadeInHOC
                        seconds={0.7}
                    >
                        {profilePic ?
                            <Avatar className={classes.avatar} src={profilePic.url} />
                            :
                            <Avatar className={classes.avatar}>
                                {name[0].toUpperCase()}
                            </Avatar>
                        }
                    </FadeInHOC>
                    <h1 className={classes.h1} >{name}</h1>
                </span>
                <span className={[classes.actBtn, classes.hideOnMob].join(' ')}>
                    <FadeInHOC
                        seconds={0.9}
                    >
                        <CallIcon className={classes.icon} />
                    </FadeInHOC>
                    <p className={classes.p} >{telephone}</p>
                    {copyBtn(telephone)}
                </span>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.mobileProfile} >
                <span className={classes.mobActBtn} >
                    <EmailIcon className={classes.icon} />
                    <p className={classes.p} >{email}</p>
                    {copyBtn(email)}
                </span>
                <span className={classes.mobActBtn}>
                    <CallIcon className={classes.icon} />
                    <p className={classes.p} >{telephone}</p>
                    {copyBtn(telephone)}
                </span>
            </div>
            <Divider className={classes.bottomDivider} />
        </>
    )
}
