import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FilledInput from './FilledInput'

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const useStyles = makeStyles(styles)

export default function House({ name, context, dispatch }) {
    const input = useContext(context)
    const classes = useStyles()
    useEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name: 'nrDhoma' })
            dispatch({ type: 'onDelete', name: 'siperfaqe' })
            dispatch({ type: 'onDelete', name: 'kate' })
            dispatch({ type: 'onDelete', name: 'adresa' })
        }
    }, [input.category])
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
