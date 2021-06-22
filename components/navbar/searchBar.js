import React from 'react'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0070f3'
        }
    }
})

export default function SearchBar({ open, onClose }) {
    return (
        <Drawer anchor='top' open={open} onClose={onClose} >
            <List>
                <ListItem>
                    <FormControl
                        fullWidth
                    >
                        <ThemeProvider theme={theme} >
                            <InputLabel htmlFor="input-with-icon-adornment">Kerko</InputLabel>
                            <Input
                                color='primary'
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
                </ListItem>
            </List>
        </Drawer>
    )
}
