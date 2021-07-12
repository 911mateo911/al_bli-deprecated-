import React, { useContext, useLayoutEffect, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from './FilledInput'

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const addValidation = () => {
    ValidatorForm.addValidationRule(`isNumber`, (value) => {
        return /^\d+$/.test(value)
    })
}

const useStyles = makeStyles(styles)

export default function OtherHouse({ dispatch, context }) {
    const input = useContext(context)
    const classes = useStyles()
    useLayoutEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name: 'siperfaqe' })
            dispatch({ type: 'onDelete', name: 'adresa' })
        };
    }, [])
    useEffect(() => {
        addValidation()
    }, [])
    return (
        <div className={classes.root} >
            <FilledInput
                label='Adresa'
                name='adresa'
                dispatch={dispatch}
                type='text'
                value={input.adresa || ''}
                inputLength={100}
            />
            <FilledInput
                label='Siperfaqe (m2)'
                name='siperfaqe'
                validate
                dispatch={dispatch}
                inputLength={10}
                value={input.siperfaqe || ''}
                type='numeric'
                validator='isNumber'
                validatorMsg='Siperfaqja nuk eshte e sakte!'
            />
        </div>
    )
}
