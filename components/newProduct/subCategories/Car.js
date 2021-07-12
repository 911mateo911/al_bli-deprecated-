import React, { useContext, useLayoutEffect, useEffect } from 'react'
import 'date-fns'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import FilledInput from './FilledInput'

const styles = theme => ({
    root: {
        width: '90%'
    }
})

export const textValidation = () => {
    ValidatorForm.addValidationRule(`isText`, (value) => {
        return /^[a-z '-]+$/i.test(value)
    })
}

export const numberValidation = () => {
    ValidatorForm.addValidationRule(`isNumber`, (value) => {
        return /^\d+$/.test(value)
    })
}

export function formattedDate(dt) {
    const [month, day, year] = [dt.getMonth(), dt.getDate(), dt.getFullYear()]
    let formattedMonth = month
    if (month < 10) formattedMonth = `0${month}`
    return `${formattedMonth}/${day}/${year}`
}

const useStyles = makeStyles(styles)

export default function Car({ dispatch, context }) {
    const classes = useStyles()
    const input = useContext(context)
    useLayoutEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name: 'marka' })
            dispatch({ type: 'onDelete', name: 'modeli' })
            dispatch({ type: 'onDelete', name: 'viti' })
            dispatch({ type: 'onDelete', name: 'kilometra' })
            dispatch({ type: 'onDelete', name: 'karburanti' })
            dispatch({ type: 'onDelete', name: 'transmisioni' })
        };
    }, [])
    useEffect(() => {
        dispatch({ type: 'onChange', name: 'viti', value: formattedDate(new Date()) })
    }, [])
    return (
        <div className={classes.root} >
            <FilledInput
                value={input.marka || ''}
                dispatch={dispatch}
                type='text'
                name='marka'
                label='Marka'
                inputLength={50}
            />
            <FilledInput
                label='Modeli'
                name='modeli'
                type='text'
                dispatch={dispatch}
                inputLength={50}
                value={input.modeli || ''}
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
                    />
                </MuiPickersUtilsProvider>
            </FormControl>
            <FilledInput
                inputLength={10}
                type='numeric'
                label='Kilometra'
                name='kilometra'
                value={input.kilometra || ''}
                dispatch={dispatch}
                validate
                validator='isNumber'
                validatorMsg='Kilometrat nuk jane korrekte!'
            />
            <FilledInput
                name='karburanti'
                label='Karburanti'
                value={input.karburanti || ''}
                inputLength={30}
                dispatch={dispatch}
                validate
                type='text'
                validator='isText'
                validatorMsg='Karburanti nuk eshte korrekt!'
            />
            <FilledInput
                label='Transmisioni'
                name='transmisioni'
                validate
                value={input.transmisioni || ''}
                type='text'
                validator='isText'
                validatorMsg='Te dhenat nuk jane korrekte!'
                dispatch={dispatch}
                inputLength={30}
            />
        </div>
    )
}
