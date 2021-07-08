import React, { useContext, memo, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import ListItem from '@material-ui/core/ListItem'
import { useRouter } from 'next/router'
import List from '@material-ui/core/List'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import Drawer from '@material-ui/core/Drawer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { handleSubmit } from './desktopNavbar'
import { SearchDispatch } from '../contexts/search.context'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0070f3'
        }
    }
})

function SearchBar({ open, onClose }) {
    const [state, setState] = useState('')
    const router = useRouter()
    function onSubmit(e, state, setState, dispatch, router) {
        onClose()
        handleSubmit(e, state, setState, dispatch, router)
    }
    const dispatch = useContext(SearchDispatch)
    return (
        <Drawer anchor='top' open={open} onClose={onClose} >
            <List>
                <ListItem>
                    <FormControl
                        fullWidth
                    >
                        <ThemeProvider theme={theme} >
                            <ValidatorForm onSubmit={e => onSubmit(e, state, setState, dispatch, router)}>
                                <TextValidator
                                    color='primary'
                                    label='Kerko'
                                    fullWidth
                                    value={state}
                                    onChange={e => setState(e.target.value)}
                                    placeholder='Kerko produkte'
                                    id="input-with-icon-adornment"
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
                                    errorMessages={['Kerkohet']}
                                />
                            </ValidatorForm>
                        </ThemeProvider>
                    </FormControl>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default memo(SearchBar)