import React, { useContext, memo } from 'react'
import { allCategories } from '../newProduct/CategorySelect'
import { SelectValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import { FormControl } from '@material-ui/core'
import { SearchDispatch } from '../contexts/search.context'

const styles = theme => ({
    root: {
        width: '30%',
        marginRight: '-6px',
        [theme.breakpoints.down('md')]: {
            width: '35%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '50%'
        },
        [theme.breakpoints.down(theme.breakpoints.values.xs + 800)]: {
            width: '40%',
            margin: 0
        }
    }
})

const useStyles = makeStyles(styles)

function handleChange(e, dispatch) {
    dispatch({ type: 'setCategory', value: e.target.value })
}

function CategoryAdornment({ category }) {
    const dispatch = useContext(SearchDispatch)
    const classes = useStyles()
    return (
        <FormControl className={classes.root} >
            <SelectValidator
                fullWidth
                variant='filled'
                label='Kategoria'
                value={category}
                onChange={e => handleChange(e, dispatch)}
            >
                <MenuItem value='all' >Te gjitha</MenuItem>
                {allCategories.map(e => e)}
            </SelectValidator>
        </FormControl>
    )
}

export default memo(CategoryAdornment)
