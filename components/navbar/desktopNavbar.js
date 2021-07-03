import React, { useContext } from 'react'
import { RouterDispatchContext } from '../contexts/routeHistory.context'
import { useSession } from 'next-auth/client'
import { LoginElem } from './mobileNavbar'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import { theme } from './searchBar'
import navRoutes from './navRoutes'

export default function desktopNavbar({
    classes,
    openPopover
}) {
    const [session, loading] = useSession()
    const dispatch = useContext(RouterDispatchContext)
    const router = useRouter()
    function goTo(link) {
        dispatch({ type: 'pushHistory', value: link })
        dispatch({ type: 'cleanHistory' })
        router.push(link)
    }
    return (
        <>
            <div className={classes.linkWrap} >
                <Link href='/' >
                    <p className={classes.bigLogo} >al-<strong className={classes.bli} >Bli</strong></p>
                </Link>
                {navRoutes.map((l, i) => {
                    return <a
                        key={i}
                        onClick={() => goTo(l.href)}
                        className={classes.linkItem}>
                        {l.text}
                    </a>
                })}
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
                {!loading && LoginElem(session, openPopover, classes, false)}
            </div>
        </>
    )
}
