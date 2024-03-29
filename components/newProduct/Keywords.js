import React, { useContext, memo } from 'react'
import ChipInput from 'material-ui-chip-input'

function Keywords({ value, dispatch }) {
    return (
        <ChipInput
            fullWidth
            margin='normal'
            variant='outlined'
            label='Fjale kyce'
            InputLabelProps={{
                shrink: true
            }}
            helperText='Fjalet kyce ndihmojne ne shikueshmeri me te larte.'
            InputProps={{
                disabled: value.length > 4
            }}
            fullWidthInput
            value={value}
            onDelete={e => dispatch({ type: 'onDeleteChip', chip: e })}
            onAdd={e => dispatch({ type: 'onAdd', chip: e })}
        />
    )
}

export default memo(Keywords)