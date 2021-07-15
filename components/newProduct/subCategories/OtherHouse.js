import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from './FilledInput'

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const useStyles = makeStyles(styles)

export default function OtherHouse({ dispatch, context }) {
    const input = useContext(context)
    const classes = useStyles()
    useEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name: 'siperfaqe' })
            dispatch({ type: 'onDelete', name: 'adresa' })
        };
    }, [input.category])
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
