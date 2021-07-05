import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { theme } from '../navbar/searchBar'

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: 'white',
        paddingRight: '0',
        margin: '20px auto 10px auto',
        [theme.breakpoints.down('xs')]: {
            marginTop: 0
        }
    },
    search: {
        color: '#0070f3'
    }
})

const useStyles = makeStyles(styles)

export default function Searchbar() {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <OutlinedInput
                className={classes.root}
                placeholder='Kerko'
                id="input-with-icon-adornment"
                margin='none'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                            <SearchIcon className={classes.search} />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </ThemeProvider>
    )
}
