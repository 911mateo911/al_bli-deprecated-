import React, { useContext } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { theme } from '../navbar/searchBar'
import axios from 'axios'
import CityAdornment from './CityAdornment'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import CategoryAdornment from './CategoryAdornment'
import { SearchDispatch, SearchContext } from '../contexts/search.context'

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
    },
    input: {
        paddingRight: '4px !important'
    },
    adornment: {
        display: 'flex',
        marginTop: '10px',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})

const useStyles = makeStyles(styles)

function handleChange(e, dispatch) {
    dispatch({ type: 'setQuery', value: e.target.value })
}

async function handleSubmit(state, dispatch) {
    dispatch({ type: 'closeInitialGreet' })
    dispatch({ type: 'setGridLoading', value: true })
    const { query, category, city, page } = state
    const request = await axios.post('api/search-products', { query, category, city, page })
    dispatch({ type: 'closeInitialGreet' })
    dispatch({ type: 'setProducts', value: request.data.products })
    dispatch({ type: 'resetPage' })
    dispatch({ type: 'setGridLoading', value: false })
}

export default function Searchbar() {
    const state = useContext(SearchContext)
    const dispatch = useContext(SearchDispatch)
    const classes = useStyles()
    const mediaQuery = useMediaQuery('(max-width: 800px)')
    return (
        <ValidatorForm className={classes.root} noValidate onSubmit={() => handleSubmit(state, dispatch)} >
            <ThemeProvider theme={theme}>
                <TextValidator
                    fullWidth
                    placeholder='Kerko'
                    variant='outlined'
                    value={state.query}
                    margin='none'
                    validators={['required']}
                    errorMessages={['Kerkohet!']}
                    onChange={e => handleChange(e, dispatch)}
                    InputProps={{
                        endAdornment: (
                            <>
                                {!mediaQuery && (
                                    <>
                                        <CityAdornment city={state.city} />
                                        <CategoryAdornment category={state.category} />
                                    </>
                                )}
                                <InputAdornment position="end">
                                    <IconButton type='submit' >
                                        <SearchIcon className={classes.search} />
                                    </IconButton>
                                </InputAdornment>
                            </>
                        ),
                        classes: { root: classes.input }
                    }}
                />
            </ThemeProvider>
            {mediaQuery && (
                <div className={classes.adornment} >
                    <CityAdornment city={state.city} />
                    <CategoryAdornment category={state.category} />
                </div>
            )}
        </ValidatorForm>
    )
}
