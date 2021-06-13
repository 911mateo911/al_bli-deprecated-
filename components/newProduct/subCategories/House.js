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

export default function House({ name }) {
    const dispatch = useContext(DispatchContext)
    const input = useContext(FormContext)
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
            <TextValidator
                label='Nr. i dhomave'
                name='nrDhoma'
                fullWidth
                variant='filled'
                InputLabelProps={{
                    shrink: true
                }}
                margin='normal'
                value={input.nrDhoma || ''}
                inputProps={{
                    maxLength: 2,
                    inputMode: 'numeric'
                }}
                validators={['required', 'isNumber']}
                errorMessages={['Kerkohet!', 'Numri i dhomave nuk eshte i sakte!']}
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
            {name === 'house' && (
                <TextValidator
                    label='Nr. i kateve'
                    name='kate'
                    fullWidth
                    variant='filled'
                    InputLabelProps={{
                        shrink: true
                    }}
                    margin='normal'
                    value={input.kate || ''}
                    inputProps={{
                        maxLength: 5,
                        inputMode: 'numeric'
                    }}
                    validators={['required', 'isNumber']}
                    errorMessages={['Kerkohet!', 'Nr. i kateve nuk eshte i sakte!']}
                    onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
                />
            )}
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
                    maxLength: 70
                }}
                validators={['required']}
                errorMessages={['Kerkohet!']}
                onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
            />
        </div>
    )
}
