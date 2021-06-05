import React, { useContext, memo } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
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
            <InputLabel htmlFor="grouped-select">Kategoria</InputLabel>
            <Select
                defaultValue=""
                label='Kategoria'
                id="grouped-select"
                value={value}
                onChange={e => dispatch({ type: 'onChange', name: 'category', value: e.target.value })}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {allCategories.map(e => e)}
            </Select>
        </>
    )
}

export default memo(CategorySelect)