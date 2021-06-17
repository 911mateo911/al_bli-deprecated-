import React, { useContext, useLayoutEffect, useEffect } from 'react'
import { DispatchContext, FormContext } from '../../contexts/newProductForm.context'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import 'date-fns';
import { formattedDate } from './Car'
import FormControl from '@material-ui/core/FormControl';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const addValidation = () => {
    ValidatorForm.addValidationRule(`isText`, (value) => {
        return /^[a-z '-]+$/i.test(value)
    })
    ValidatorForm.addValidationRule(`isNumber`, (value) => {
        return /^\d+$/.test(value)
    })
}

const useStyles = makeStyles(styles)

export default function Motorcycle() {
    const dispatch = useContext(DispatchContext)
    const input = useContext(FormContext)
    const classes = useStyles()
    useLayoutEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name: 'marka' })
            dispatch({ type: 'onDelete', name: 'modeli' })
            dispatch({ type: 'onDelete', name: 'viti' })
        };
    }, [])
    useEffect(() => {
        addValidation()
        dispatch({ type: 'onChange', name: 'viti', value: formattedDate(new Date()) })
    }, [])
    return (
        <div className={classes.root}>
            <TextValidator
                label='Marka'
                name='marka'
                fullWidth
                variant='filled'
                InputLabelProps={{
                    shrink: true
                }}
                margin='normal'
                value={input.marka || ''}
                inputProps={{
                    maxLength: 50
                }}
                validators={['required']}
                errorMessages={['Kerkohet!']}
                onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
            />
            <TextValidator
                label='Modeli'
                name='modeli'
                fullWidth
                variant='filled'
                InputLabelProps={{
                    shrink: true
                }}
                margin='normal'
                value={input.modeli || ''}
                inputProps={{
                    maxLength: 50
                }}
                validators={['required']}
                errorMessages={['Kerkohet!']}
                onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
            />
            <FormControl required={true} fullWidth >
                <MuiPickersUtilsProvider
                    utils={DateFnsUtils} >
                    <DatePicker
                        format="MM/dd/yyyy"
                        margin="normal"
                        fullWidth
                        id="date-picker-inline"
                        label="Viti"
                        openTo='year'
                        inputVariant='filled'
                        value={input.viti}
                        onChange={(date) => dispatch({ type: 'onChange', name: 'viti', value: date })}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </FormControl>
        </div>
    )
}
