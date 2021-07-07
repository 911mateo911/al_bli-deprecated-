import React, { useContext, memo } from 'react'
import { SelectValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import { FormControl } from '@material-ui/core'
import { SearchDispatch } from '../contexts/search.context'

const styles = theme => ({
    root: {
        width: '30%',
        marginRight: '4px',
        [theme.breakpoints.down(theme.breakpoints.values.xs + 800)]: {
            width: '40%',
            margin: 0
        }
    }
})

const useStyles = makeStyles(styles)

function handleChange(e, dispatch) {
    dispatch({ type: 'setCity', value: e.target.value })
}

function CityAdornment({ city }) {
    const dispatch = useContext(SearchDispatch)
    const classes = useStyles()
    return (
        <FormControl className={classes.root} >
            <SelectValidator
                fullWidth
                variant='filled'
                label='Qyteti'
                value={city}
                onChange={e => handleChange(e, dispatch)}
            >
                <MenuItem value='all' >Te gjithe</MenuItem>
                <MenuItem value='Berat' >Berat</MenuItem>
                <MenuItem value='Diber' >Diber</MenuItem>
                <MenuItem value='Durres' >Durres</MenuItem>
                <MenuItem value='Elbasan' >Elbasan</MenuItem>
                <MenuItem value='Fier' >Fier</MenuItem>
                <MenuItem value='Gjirokaster' >Gjirokaster</MenuItem>
                <MenuItem value='Korce' >Korce</MenuItem>
                <MenuItem value='Kukes' >Kukes</MenuItem>
                <MenuItem value='Lezhe' >Lezhe</MenuItem>
                <MenuItem value='Shkoder' >Shkoder</MenuItem>
                <MenuItem value='Tirane' >Tirane</MenuItem>
                <MenuItem value='Vlore' >Vlore</MenuItem>
            </SelectValidator>
        </FormControl>
    )
}

export default memo(CityAdornment)