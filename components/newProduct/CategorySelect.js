import React, { useContext, memo } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import { SelectValidator } from 'react-material-ui-form-validator'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DispatchContext } from '../contexts/newProductForm.context'
import categories from './utils/categories'

function CategorySelect({ value }) {
    const bgWhite = { backgroundColor: '#f2f2f2' }
    const dispatch = useContext(DispatchContext)
    const allCategories = categories.map(c => {
        const categoryName = <ListSubheader style={bgWhite} color='primary' >
            {c.emri}
        </ListSubheader>
        const subCategories = c.nenkategori.map(e => <MenuItem value={e} >{e}</MenuItem>)
        return [
            categoryName,
            subCategories
        ]
    })
    return (
        <>
            <SelectValidator
                defaultValue=""
                fullWidth
                label='Kategoria'
                variant='filled'
                id="grouped-select"
                value={value}
                validators={['required']}
                errorMessages={['Kerkohet!']}
                onChange={e => dispatch({ type: 'onChange', name: 'category', value: e.target.value })}
            >
                {allCategories.map(e => e)}
            </SelectValidator>
        </>
    )
}

export default memo(CategorySelect)