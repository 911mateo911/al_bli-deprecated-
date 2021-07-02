import React from 'react'
import { useSession } from 'next-auth/client'
import Searchbar from './searchBar'
import Avatar from '@material-ui/core/Avatar'
import Link from 'next/link'
import MenuDrawer from './menuDrawer'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

export function LoginElem(user, openPopover, classes, isMobile) {
    const loggedIn =
        <Avatar onClick={openPopover} className={classes.socialAvt}>
            {user.profilePic ?
                <img className={classes.profilePic} src={user.profilePic.url} /> : user.name[0].toUpperCase()}
        </Avatar>
    const loggedOutClass = isMobile ? classes.mobileLoginBtn : classes.loginBtn
    const loggedOut =
        (<Link href='/kycu' >
            <a className={classes.mobileLoginBtn} >Hyr</a>
        </Link>)
    return Boolean(user) ? loggedIn : loggedOut
}

export default function mobileNavbar({
    classes,
    openPopover,
    searchOpen,
    menuOpen,
    toggleSearch,
    toggleMenu
}) {
    const [session, loading] = useSession()
    return (
        <>
            <MenuDrawer
                open={menuOpen}
                onClose={toggleMenu}
            />
            <MenuIcon onClick={toggleMenu} className={classes.menu} />
            <Link href='/' >
                <p className={Boolean(session) ? classes.logo : classes.logoNoLogin} >al-<strong className={classes.bli} >Bli</strong></p>
            </Link>
            <span className={classes.mobileWrap} >
                <SearchIcon onClick={toggleSearch} className={classes.search} />
                {!loading && LoginElem(session.user, openPopover, classes, true)}
            </span>
            <Searchbar
                open={searchOpen}
                onClose={toggleSearch}
            />
        </>
    )
}
