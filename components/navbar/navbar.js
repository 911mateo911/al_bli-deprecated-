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
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import MenuDrawer from './menuDrawer'
import FormControl from '@material-ui/core/FormControl'
import SearchBar from './searchBar'
import PopoverElem from './Popover'
import { theme } from './searchBar'
import { useSession } from "next-auth/client"
import { ThemeProvider } from '@material-ui/core/styles'
import navbarHook from '../hooks/navbar.hook';

const useStyles = makeStyles(styles)

function Navbar() {
    const classes = useStyles()
    const router = useRouter()
    const [session, loading] = useSession()
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
            <MenuDrawer
                open={state.menuOpen}
                onClose={toggleMenu}
            />
            <MenuIcon onClick={toggleMenu} className={classes.menu} />
            <Link href='/' >
                <p className={classes.logo} >al-<strong className={classes.bli} >Bli</strong></p>
            </Link>
            <span className={classes.mobileWrap} >
                <SearchIcon onClick={toggleSearch} className={classes.search} />
                <Avatar onClick={openPopover} className={classes.avatarMobile}>M</Avatar>
                <PopoverElem anchor={state.anchorEl} open={popoverOpen} close={closePopover} />
            </span>
            <SearchBar
                open={state.searchOpen}
                onClose={toggleSearch}
            />
            <div className={classes.linkWrap} >
                <Link href='/' >
                    <p className={classes.bigLogo} >al-<strong className={classes.bli} >Bli</strong></p>
                </Link>
                <Link href='/' >
                    <a className={classes.linkItem}>Shtepia</a>
                </Link>
                <Link href='/kategori' >
                    <a className={classes.linkItem} >Kategori</a>
                </Link>
                <Link href='/new' >
                    <a className={classes.linkItem} >Oferta</a>
                </Link>
                <Link href='/produkt/shto' >
                    <a className={classes.linkItem} >Shit</a>
                </Link>
            </div>
            <div className={classes.social} >
                <FormControl
                    fullWidth
                >
                    <ThemeProvider theme={theme}>
                        <InputLabel htmlFor="input-with-icon-adornment">Kerko</InputLabel>
                        <Input
                            placeholder='Kerko produkte'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                    </ThemeProvider>
                </FormControl>
                <Avatar onClick={openPopover} className={classes.socialAvt}>M</Avatar>
                <PopoverElem anchor={state.anchorEl} open={popoverOpen} close={closePopover} />
            </div>
        </div >
    )
}

export default Navbar