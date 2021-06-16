import React, { useContext, useLayoutEffect, useEffect } from 'react'
import { DispatchContext, FormContext } from '../../contexts/newProductForm.context'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'

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

export default function OtherHouse() {
    const dispatch = useContext(DispatchContext)
    const input = useContext(FormContext)
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
            <TextValidator
                label='Adresa'
                name='adresa'
                fullWidth
                variant='filled'
                InputLabelProps={{
                    shrink: true
                }}
                margin='normal'
                value={input.adresa || ''}
                inputProps={{
                    maxLength: 100
                }}
                validators={['required']}
                errorMessages={['Kerkohet!']}
                onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
            />
            <TextValidator
                label='Siperfaqe (m2)'
                name='siperfaqe'
                fullWidth
                variant='filled'
                InputLabelProps={{
                    shrink: true
                }}
                margin='normal'
                value={input.siperfaqe || ''}
                inputProps={{
                    maxLength: 10,
                    inputMode: 'numeric'
                }}
                validators={['required', 'isNumber']}
                errorMessages={['Kerkohet!', 'Siperfaqja nuk eshte e sakte!']}
                onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
            />
        </div>
    )
}
