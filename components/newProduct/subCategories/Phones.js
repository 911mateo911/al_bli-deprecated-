import React, { useContext, useLayoutEffect, useEffect } from 'react'
import { DispatchContext, FormContext } from '../../contexts/newProductForm.context'
import { TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { formattedDate } from './Car'

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
    useEffect(() => {
        dispatch({ type: 'onChange', name: 'viti', value: formattedDate(new Date()) })
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
        </div>
    )
}
