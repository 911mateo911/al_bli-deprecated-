import React, { useContext, memo, useEffect } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { DispatchContext } from '../contexts/newProductForm.context'
import regex from './utils/regexValues'

const styles = theme => ({
    root: {
        width: '100%'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0070f3'
        }
    }
})

const addValidation = (name, value) => {
    ValidatorForm.addValidationRule(`is${name}`, (value) => {
        return regex[name].regex.test(value.trim())
    })
}

const useStyles = makeStyles(styles)

function FormInput({ label, name, value, type, multiLine }) {
    const classes = useStyles()
    const dispatch = useContext(DispatchContext)
    const preserveMultiline = { whiteSpace: 'pre-wrap' }
    useEffect(() => {
        addValidation(name, value)
    }, [])
    return (
        <div className={classes.root} >
            <ThemeProvider theme={theme} >
                <TextValidator
                    style={multiLine ? preserveMultiline : {}}
                    label={label}
                    fullWidth
                    multiline={multiLine}
                    margin='normal'
                    name={name}
                    value={value}
                    onChange={e => dispatch({ type: 'onChange', name, value: e.target.value })}
                    variant='outlined'
                    InputLabelProps={{
                        shrink: true
                    }}
                    inputProps={{
                        inputMode: type,
                        maxLength: regex[name].maxLength
                    }}
                    validators={['required', `is${name}`]}
                    errorMessages={['Kerkohet!', regex[name].message]}
                />
            </ThemeProvider>
        </div>
    )
}

export default memo(FormInput)