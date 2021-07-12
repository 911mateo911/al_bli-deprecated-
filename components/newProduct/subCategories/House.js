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

export default function House({ name, context, dispatch }) {
    const input = useContext(context)
    const classes = useStyles()
    useLayoutEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name: 'nrDhoma' })
            dispatch({ type: 'onDelete', name: 'siperfaqe' })
            if (name === 'house') dispatch({ type: 'onDelete', name: 'kate' })
            dispatch({ type: 'onDelete', name: 'adresa' })
        };
    }, [])
    useEffect(() => {
        addValidation()
    }, [])
    return (
        <div className={classes.root} >
            <FilledInput
                value={input.nrDhoma || ''}
                label='Nr. i dhomave'
                name='nrDhoma'
                validate
                validator='isNumber'
                type='numeric'
                inputLength={2}
                validatorMsg='Numri i dhomave nuk eshte i sakte!'
                dispatch={dispatch}
            />
            <FilledInput
                label='Siperfaqe (m2)'
                name='siperfaqe'
                dispatch={dispatch}
                inputLength={10}
                value={input.siperfaqe || ''}
                validate
                validator='isNumber'
                type='numeric'
                validatorMsg='Siperfaqja nuk eshte e sakte!'
            />

            {name === 'house' && (
                <FilledInput
                    label='Nr. i kateve'
                    name='kate'
                    inputLength={2}
                    value={input.kate || ''}
                    type='numeric'
                    validate
                    dispatch={dispatch}
                    validator='isNumber'
                    validatorMsg='Nr. i kateve nuk eshte i sakte!'
                />
            )}
            <FilledInput
                label='Adresa'
                name='adresa'
                inputLength={70}
                dispatch={dispatch}
                type='text'
                value={input.adresa || ''}
            />
        </div>
    )
}
