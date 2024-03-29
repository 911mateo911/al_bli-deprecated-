import React, { useContext, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import { formattedDate } from './Car'
import FormControl from '@material-ui/core/FormControl';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FilledInput from './FilledInput';

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const useStyles = makeStyles(styles)

export default function Motorcycle({ dispatch, context }) {
    const input = useContext(context)
    const classes = useStyles()
    useEffect(() => {
        return () => {
            dispatch({ type: 'onChange', name: 'viti', value: formattedDate(new Date()) })
            dispatch({ type: 'onDelete', name: 'marka' })
            dispatch({ type: 'onDelete', name: 'modeli' })
        };
    }, [input.category])
    return (
        <div className={classes.root}>
            <FilledInput
                label='Marka'
                name='marka'
                type='text'
                inputLength={50}
                dispatch={dispatch}
                value={input.marka || ''}
            />
            <FilledInput
                label='Modeli'
                name='modeli'
                value={input.modeli || ''}
                dispatch={dispatch}
                inputLength={50}
                type='text'
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
