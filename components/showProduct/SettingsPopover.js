import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/showPage/settings.styles'
import ListItemText from '@material-ui/core/ListItemText'
import { ShowPageContext, ShowPageDispatch } from '../contexts/showPage.context'
import List from '@material-ui/core/List'
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

const useStyles = makeStyles(styles)

export default function SettingsPopover({ productId }) {
    const classes = useStyles()
    const state = useContext(ShowPageContext)
    const dispatch = useContext(ShowPageDispatch)
    const popoverOpen = Boolean(state.anchorEl)
    const router = useRouter()
    function handleEdit() {
        dispatch({ type: 'startLoading' })
        router.push(`/produkt/ndrysho/${productId}`)
    }
    function handleDelete() {
        dispatch({ type: 'closePopover' })
        dispatch({ type: 'openDialog' })
    }
    function handleClose() {
        dispatch({ type: 'closePopover' })
    }
    return (
        <Popover
            className={classes.popover}
            classes={{ paper: classes.paper }}
            open={popoverOpen}
            onClose={handleClose}
            elevation={0}
            anchorEl={state.anchorEl}
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
                    <ListItem className={classes.listItem} button onClick={handleEdit}>
                        <ListItemAvatar>
                            <Avatar>
                                <EditIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Ndrysho' />
                    </ListItem>
                    <ListItem className={classes.listItem} button onClick={handleDelete}>
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
