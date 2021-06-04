import React, { memo, useContext } from 'react'
import { TextValidator } from 'react-material-ui-form-validator'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { DispatchContext } from '../contexts/newProductForm.context'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '100%'
    },
    lek: {
        color: '#0070f3'
    },
    adornment: {
        marginRight: '-14px',
        width: '50%'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0070f3'
        }
    }
})

const useStyles = makeStyles(styles)

function PriceInput({ label, value, currency }) {
    const classes = useStyles()
    const dispatch = useContext(DispatchContext)
    const moneySelect = (
        <FormControl variant="filled" className={classes.adornment}>
            <InputLabel id="demo-simple-select-filled-label">Lek</InputLabel>
            <Select
                disableUnderline
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                defaultValue='Lek'
                value={currency}
                onChange={e => dispatch({ type: 'onChange', name: 'currency', value: e.target.value })}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='€'>€</MenuItem>
                <MenuItem value='Lek'>Lek</MenuItem>
            </Select>
        </FormControl>)
    return (
        <div className={classes.root} >
            <ThemeProvider theme={theme} >
                <TextValidator
                    label={label}
                    fullWidth
                    type='number'
                    margin='normal'
                    variant='outlined'
                    value={value}
                    onChange={e => dispatch({ type: 'onChange', name: 'price', value: e.target.value })}
                    InputLabelProps={{
                        shrink: true
                    }}
                    InputProps={{
                        endAdornment: (moneySelect)
                    }}
                    className={classes.input}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </ThemeProvider>
        </div>
    )
}

export default memo(PriceInput)