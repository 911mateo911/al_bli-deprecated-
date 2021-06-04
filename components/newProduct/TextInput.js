import React, { useContext, memo } from 'react'
import { TextValidator } from 'react-material-ui-form-validator'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { DispatchContext } from '../contexts/newProductForm.context'

const styles = theme => ({
    root: {
        width: '100%'
    },
    input: {
        color: 'red'
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

function FormInput({ label, name, value, type, multiLine }) {
    const classes = useStyles()
    const dispatch = useContext(DispatchContext)
    return (
        <div className={classes.root} >
            <ThemeProvider theme={theme} >
                <TextValidator
                    label={label}
                    fullWidth
                    multiline={multiLine}
                    margin='normal'
                    name={name}
                    value={value}
                    onChange={e => dispatch({ type: 'onChange', name, value: e.target.value })}
                    variant='outlined'
                    type={type}
                    InputLabelProps={{
                        shrink: true
                    }}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
            </ThemeProvider>
        </div>
    )
}

export default memo(FormInput)