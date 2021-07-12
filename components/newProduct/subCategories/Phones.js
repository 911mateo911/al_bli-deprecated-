import React, { useContext, useLayoutEffect, useEffect } from 'react'
import { TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FilledInput from './FilledInput';
import { formattedDate } from './Car'

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const useStyles = makeStyles(styles)

export default function Phones({ dispatch, context }) {
    const classes = useStyles()
    const input = useContext(context)
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
            <FilledInput
                label='Prodhuesi'
                name='prodhuesi'
                inputLength={50}
                value={input.prodhuesi || ''}
                type='text'
                dispatch={dispatch}
            />
            <FilledInput
                label='Modeli'
                name='modeli'
                value={input.modeli || ''}
                dispatch={dispatch}
                type='text'
                inputLength={50}
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
