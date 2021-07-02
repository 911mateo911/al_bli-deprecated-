import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '../../styles/navbar/navbar.styles'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import MenuDrawer from './menuDrawer'
import FormControl from '@material-ui/core/FormControl'
import SearchBar from './searchBar'
import PopoverElem from './Popover'
import { theme } from './searchBar'
import DesktopNavbar from './desktopNavbar';
import { useSession } from "next-auth/client"
import { ThemeProvider } from '@material-ui/core/styles'
import navbarHook from '../hooks/navbar.hook'
import MobileNavbar from './mobileNavbar'

const useStyles = makeStyles(styles)

function Navbar() {
    const classes = useStyles()
    const router = useRouter()
    const [session, loading] = useSession()
    const isMobile = useMediaQuery('(max-width: 599.95px)')
    const [state,
        toggleMenu,
        toggleSearch,
        openPopover,
        closePopover
    ] = navbarHook({
        menuOpen: false,
        searchOpen: false,
        anchorEl: null
    })
    const popoverOpen = Boolean(state.anchorEl)
    return (
        <div className={classes.navBar} >
            {isMobile && <MobileNavbar
                classes={classes}
                menuOpen={state.menuOpen}
                openPopover={openPopover}
                searchOpen={state.searchOpen}
                toggleSearch={toggleSearch}
                toggleMenu={toggleMenu}
            />}
            {!isMobile && <DesktopNavbar
                classes={classes}
                theme={theme}
                openPopover={openPopover}
            />}
            {
                (!loading && session) && <PopoverElem
                    anchor={state.anchorEl}
                    open={popoverOpen}
                    close={closePopover}
                    name={session.user.name}
                    email={session.user.email}
                    profilePicUrl={session.user.profilePic ? session.user.profilePic.url : ''}
                />
            }
        </div >
    )
}

export default Navbar