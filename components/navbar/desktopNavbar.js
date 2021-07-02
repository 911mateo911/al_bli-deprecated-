import React from 'react'
import { useSession } from 'next-auth/client'
import { LoginElem } from './mobileNavbar'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'

export default function desktopNavbar({
    classes,
    theme,
    openPopover
}) {
    const [session, loading] = useSession()
    return (
        <>
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
                        <InputLabel shrink className={classes.label} htmlFor="input-with-icon-adornment">Kerko</InputLabel>
                        <Input
                            placeholder='Kerko produkte'
                            id="input-with-icon-adornment"
                            margin='none'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ThemeProvider>
                </FormControl>
                {!loading && LoginElem(session.user, openPopover, classes, false)}
            </div>
        </>
    )
}
