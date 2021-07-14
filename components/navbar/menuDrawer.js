import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from '../../styles/navbar/drawer.styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles(styles)

export default function MenuDrawer({ open, onClose }) {
    const classes = useStyles()
    return (
        <Drawer anchor='left' open={open} onClose={onClose} >
            <List
                className={classes.root}
                component="nav"
                aria-label="main mailbox folders">
                <ListItem className={classes.leftIcon} >
                    <ChevronLeftIcon onClick={onClose} />
                </ListItem>
                <Divider />
                <Link href='/' >
                    <ListItem button onClick={onClose} >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Shtepia" />
                    </ListItem>
                </Link>
                <Divider />
                <ListItem button >
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Kategori" />
                </ListItem>
                <Divider />
                <Link href='/oferta' >
                    <ListItem button onClick={onClose} >
                        <ListItemIcon>
                            <LoyaltyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Oferta" />
                    </ListItem>
                </Link>
                <Divider />
                <Link href='/produkt/shto' >
                    <ListItem button onClick={onClose} >
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Shit" />
                    </ListItem>
                </Link>
                <Divider />
            </List>
        </Drawer >
    )
}
