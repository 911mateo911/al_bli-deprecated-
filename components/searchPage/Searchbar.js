import React, { useContext } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { ThemeProvider } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { theme } from '../navbar/searchBar'
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
    }
})

const useStyles = makeStyles(styles)

function handleChange(e, dispatch) {
    dispatch({ type: 'setQuery', value: e.target.value })
}

export default function Searchbar() {
    const state = useContext(SearchContext)
    const dispatch = useContext(SearchDispatch)
    const classes = useStyles()
    return (
        <ValidatorForm className={classes.root} noValidate onSubmit={() => console.log('sasdss')} >
            <ThemeProvider theme={theme}>
                <TextValidator
                    fullWidth
                    placeholder='Kerko'
                    variant='outlined'
                    value={state.query}
                    margin='none'
                    onChange={e => handleChange(e, dispatch)}
                    InputProps={{
                        endAdornment: (
                            <>
                                <CategoryAdornment category={state.category} />
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon className={classes.search} />
                                    </IconButton>
                                </InputAdornment>
                            </>
                        ),
                        classes: { root: classes.input }
                    }}
                />
            </ThemeProvider>
        </ValidatorForm>
    )
}
