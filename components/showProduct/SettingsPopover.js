import React from 'react'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/showPage/settings.styles'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

const useStyles = makeStyles(styles)

export default function SettingsPopover({
    popoverOpen,
    closePopover,
    anchorEl
}) {
    const classes = useStyles()
    return (
        <Popover
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={popoverOpen}
            onClose={closePopover}
            elevation={0}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <div className={classes.root}>
                <List className={classes.list} >
                    <ListItem className={classes.listItem} button>
                        <ListItemAvatar>
                            <Avatar>
                                <EditIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Ndrysho' />
                    </ListItem>
                    <ListItem className={classes.listItem} button>
                        <ListItemAvatar>
                            <Avatar>
                                <DeleteIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Fshije' />
                    </ListItem>
                    <ListItem className={classes.listItem} button>
                        <ListItemAvatar>
                            <Avatar>
                                <StarIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Promovo (se shpejti)' />
                    </ListItem>
                </List>
            </div>
        </Popover>
    )
}
