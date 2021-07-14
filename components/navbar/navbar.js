import React from 'react'
import styles from '../../styles/navbar/navbar.styles'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import PopoverElem from './Popover'
import DesktopNavbar from './desktopNavbar';
import { useSession } from "next-auth/client"
import navbarHook from '../hooks/navbar.hook'
import MobileNavbar from './mobileNavbar'

const useStyles = makeStyles(styles)

function Navbar() {
    const classes = useStyles()
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
                openPopover={openPopover}
            />}
            {
                (!loading && session) && <PopoverElem
                    anchor={state.anchorEl}
                    open={popoverOpen}
                    close={closePopover}
                    color={session.user.avatarColor}
                    name={session.user.name}
                    email={session.user.email}
                    profilePicUrl={session.user.profilePic ? session.user.profilePic.url : ''}
                />
            }
        </div >
    )
}

export default Navbar