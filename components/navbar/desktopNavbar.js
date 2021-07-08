import React, { useContext, memo, useState } from 'react'
import { useSession } from 'next-auth/client'
import { LoginElem } from './mobileNavbar'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import { theme } from './searchBar'
import { SearchDispatch } from '../contexts/search.context'

function handleSubmit(state, setState, dispatch, router) {
    dispatch({ type: 'setCategory', value: 'all' })
    dispatch({ type: 'setCity', value: 'all' })
    dispatch({ type: 'setRedirected', value: true })
    dispatch({ type: 'setQuery', value: state })
    setState('')
    router.push('/kerko')
}

function desktopNavbar({
    classes,
    openPopover
}) {
    const [session, loading] = useSession()
    const [state, setState] = useState('')
    const dispatch = useContext(SearchDispatch)
    const router = useRouter()
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
                <Link href='/produkt/shto'>
                    <a className={classes.linkItem} >Shit</a>
                </Link>
            </div>
            <div className={classes.social} >
                <FormControl
                    fullWidth
                >
                    <ThemeProvider theme={theme}>
                        <InputLabel shrink htmlFor="input-with-icon-adornment">Kerko</InputLabel>
                        <Input
                            placeholder='Kerko produkte'
                            id="input-with-icon-adornment"
                            margin='none'
                            value={state}
                            onChange={e => setState(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleSubmit(
                                            state, setState, dispatch, router
                                        )}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ThemeProvider>
                </FormControl>
                {!loading && LoginElem(session, openPopover, classes, false)}
            </div>
        </>
    )
}

export default memo(desktopNavbar)