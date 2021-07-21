import React, { useContext, memo } from 'react'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import styles from '../../styles/navbar/popover.styles'
import List from '@material-ui/core/List'
import { signOut } from "next-auth/client"
import { useRouter } from 'next/router'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import EditIcon from '@material-ui/icons/Edit'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { FlashDispatchContext } from '../contexts/flashMsgs.context'
import { BackDropDispatch } from '../contexts/backdrop.context'

const useStyles = makeStyles(styles)

function PopoverElem({
    open,
    close,
    anchor,
    id,
    name,
    email,
    color,
    profilePicUrl,
    openBackDrop
}) {
    const classes = useStyles()
    const dispatch = useContext(FlashDispatchContext)
    const backDropDSP = useContext(BackDropDispatch)
    const router = useRouter()
    function signOutAndClose() {
        close()
        signOut({ redirect: false })
        router.replace('/')
        dispatch({
            type: 'addMessage',
            message: 'Mirupafshim!',
            severity: 'success'
        })
        dispatch({ type: 'showSnackbar' })
    }
    function goTo(url) {
        close()
        backDropDSP({ type: 'openBackDrop' })
        router.push(url)
    }
    const style = { backgroundColor: color }
    return (
        <Popover
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            onClose={close}
            elevation={0}
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <div className={classes.root} >
                <span className={classes.profile} >
                    {profilePicUrl ?
                        <Avatar className={classes.avatar} src={profilePicUrl} />
                        : <Avatar style={style} className={classes.avatar} >{name[0].toUpperCase()}</Avatar>}
                    <h4 className={classes.h4} >{name}</h4>
                    <h5 className={classes.h5} >{email}</h5>
                </span>
                <List component='nav' className={classes.list} >
                    <ListItem
                        onClick={() => goTo(`/perdorues/${id}`)}
                        button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profili im" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Te preferuarat" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ndrysho profilin" />
                    </ListItem>
                </List>
                <Button
                    className={classes.button}
                    variant='outlined'
                    onClick={signOutAndClose}
                    color='default'
                    startIcon={<ExitToAppIcon />}
                >
                    Dil
                </Button>
            </div>
        </Popover>
    )
}

export default memo(PopoverElem)