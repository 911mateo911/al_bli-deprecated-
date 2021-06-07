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
            <TextValidator
                label='Viti'
                name='viti'
                fullWidth
                variant='filled'
                InputLabelProps={{
                    shrink: true
                }}
                margin='normal'
                value={input.viti || ''}
                inputProps={{
                    maxLength: 4,
                    inputMode: 'numeric'
                }}
                validators={['required', `isNumber`]}
                errorMessages={['Kerkohet!', 'Viti nuk eshte korrekt!']}
                onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
            />
        </div>
    )
}
