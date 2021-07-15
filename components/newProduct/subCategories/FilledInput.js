import React, { memo, useEffect } from 'react'
import { textValidation, numberValidation } from './Car'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

function FilledInput({
    inputLength,
    validate,
    value,
    dispatch,
    type,
    name,
    label,
    validator,
    validatorMsg
}) {
    useEffect(() => {
        if (validate) {
            if (type === 'text') {
                textValidation()
            } else {
                numberValidation()
            }
        }
    }, [])
    const validators = ['required', validator]
    const errorMessages = ['Kerkohet!', validatorMsg]
    return (
        <TextValidator
            label={label}
            name={name}
            fullWidth
            variant='filled'
            InputLabelProps={{
                shrink: true
            }}
            margin='normal'
            value={value}
            inputProps={{
                inputMode: type,
                maxLength: inputLength
            }}
            validators={validate ? validators : ['required']}
            errorMessages={validate ? errorMessages : ['Kerkohet!']}
            onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
        />
    )
}

export default memo(FilledInput)