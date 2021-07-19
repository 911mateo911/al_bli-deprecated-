import React from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Searchbar from './searchBar'
import Avatar from '@material-ui/core/Avatar'
import Link from 'next/link'
import MenuDrawer from './menuDrawer'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

export function LoginElem(session, openPopover, classes, isMobile) {
    const loggedOutClass = isMobile ? classes.mobileLoginBtn : classes.loginBtn
    if (Boolean(session)) {
        return (
            session.user.profilePic ? <Avatar
                onClick={openPopover}
                className={classes.socialAvt}
                src={session.user.profilePic.url}
            /> :
                <Avatar
                    onClick={openPopover}
                    style={{ backgroundColor: session.user.avatarColor }}
                    className={classes.socialAvt}
                >
                    {session.user.name[0].toUpperCase()}
                </Avatar>
        )
    } else {
        return (
            <Link href='/kycu' >
                <a className={loggedOutClass} > Hyr</a >
            </Link >
        )
    }
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
    const router = useRouter()
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
                <IconButton
                    onClick={toggleSearch}
                    disabled={router.pathname === '/kerko'}
                    className={classes.search}
                >
                    <SearchIcon fontSize='large' />
                </IconButton>
                {!loading && LoginElem(session, openPopover, classes, true)}
            </span>
            <Searchbar
                open={searchOpen}
                onClose={toggleSearch}
            />
        </>
    )
}
