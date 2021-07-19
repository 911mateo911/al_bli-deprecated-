import React, { useContext, memo, useState } from 'react'
import { useSession } from 'next-auth/client'
import { LoginElem } from './mobileNavbar'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Link from 'next/link'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { useRouter } from 'next/router'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import { theme } from './searchBar'
import { SearchDispatch } from '../contexts/search.context'
import { onSearchFromNavbar } from '../searchPage/methods'

export function handleSubmit(e, state, setState, dispatch, router) {
    e.preventDefault()
    onSearchFromNavbar(dispatch, state)
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
                <a className={classes.linkItem} >Kategori</a>
                <Link href='/oferta' >
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
                    <ValidatorForm onSubmit={e => handleSubmit(e, state, setState, dispatch, router)} >
                        <ThemeProvider theme={theme}>
                            <TextValidator
                                disabled={router.pathname === '/kerko'}
                                fullWidth
                                placeholder='Kerko produkte'
                                id="input-with-icon-adornment"
                                margin='none'
                                value={state}
                                onChange={e => setState(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                type='submit'
                                            >
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                validators={['required']}
                                errorMessages={['']}
                            />
                        </ThemeProvider>
                    </ValidatorForm>
                </FormControl>
                {!loading && LoginElem(session, openPopover, classes, false)}
            </div>
        </>
    )
}

export default memo(desktopNavbar)