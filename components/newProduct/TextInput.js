import React, { memo, useEffect } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import regex from './utils/regexValues'

export const styles = theme => ({
    root: {
        width: '100%'
    }
})

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0070f3'
        }
    }
})

const addValidation = (name, value) => {
    ValidatorForm.addValidationRule(`is${name}`, (value) => {
        return regex[name].regex.test(value.toString().trim())
    })
}

const useStyles = makeStyles(styles)

function FormInput({ label, name, value, type, multiLine, validate, dispatch }) {
    const classes = useStyles()
    const preserveMultiline = { whiteSpace: 'pre-wrap' }
    useEffect(() => {
        if (validate) addValidation(name, value)
    }, [])
    const validators = ['required', `is${name}`]
    const errorMessages = ['Kerkohet!', regex[name].message]
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
                    validators={validate ? validators : ['required']}
                    errorMessages={validate ? errorMessages : ['Kerkohet!']}
                />
            </ThemeProvider>
        </div>
    )
}

export default memo(FormInput)