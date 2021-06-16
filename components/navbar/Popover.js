import React from 'react'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import styles from '../../styles/navbar/popover.styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles(styles)

export default function PopoverElem({ open, close, anchor }) {
    const id = open ? 'simple-popover' : undefined;
    const classes = useStyles()
    return (
        <Popover
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={open}
            onClose={close}
            id={id}
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
                    <Avatar className={classes.avatar} >M</Avatar>
                    <h4 className={classes.h4} >Mateo Malaj</h4>
                    <h5 className={classes.h5} >malajmateo@gmail.com</h5>
                </span>
                <List component='nav' className={classes.list} >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profili im" />
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
                    color='default'
                    startIcon={<ExitToAppIcon />}
                >
                    Dil
                </Button>
            </div>
        </Popover>
    )
}
