import React, { useContext, useLayoutEffect } from 'react'
import { DispatchContext, FormContext } from '../../contexts/newProductForm.context'
import { makeStyles } from '@material-ui/core/styles'
import { SelectValidator } from 'react-material-ui-form-validator'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        width: '90%'
    }
})

const useStyles = makeStyles(styles)

export default function Subs({ subCategories, name }) {
    const dispatch = useContext(DispatchContext)
    const input = useContext(FormContext)
    const classes = useStyles()
    useLayoutEffect(() => {
        return () => {
            dispatch({ type: 'onDelete', name })
        };
    }, [])
    return (
        <FormControl margin='normal' className={classes.root} >
            <SelectValidator
                fullWidth
                defaultValue=''
                label='Nenkategori'
                id="nenkategori-select"
                value={input[name] || ''}
                validators={['required']}
                variant='filled'
                errorMessages={['Kerkohet!']}
                onChange={e => dispatch({ type: 'onChange', name, value: e.target.value })}
            >
                {subCategories.map((e, i) =>
                    <MenuItem value={e.val} key={i} >
                        {e.text}
                    </MenuItem>)}
            </SelectValidator>
        </FormControl>
    )
}
