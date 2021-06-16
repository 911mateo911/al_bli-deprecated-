import React, { useContext, useLayoutEffect } from 'react'
import { DispatchContext, FormContext } from '../../contexts/newProductForm.context'
import { TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const useStyles = makeStyles(styles)

export default function Phones() {
    const classes = useStyles()
    const dispatch = useContext(DispatchContext)
    const input = useContext(FormContext)
    useLayoutEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name: 'prodhuesi' })
            dispatch({ type: 'onDelete', name: 'modeli' })
        };
    }, [])
    return (
        <div className={classes.root} >
            <TextValidator
                label='Prodhuesi'
                name='prodhuesi'
                fullWidth
                variant='filled'
                InputLabelProps={{
                    shrink: true
                }}
                margin='normal'
                value={input.prodhuesi || ''}
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
        </div>
    )
}
