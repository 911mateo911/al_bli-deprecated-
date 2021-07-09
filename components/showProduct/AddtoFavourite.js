import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite'

const styles = theme => ({
    heart: {
        margin: '0 0 0 -10px'
    },
    heartRed: {
        color: '#f44336'
    }
})

const useStyles = makeStyles(styles)

async function handleClick(state, setState, productId, accountId) {
    setState({ favourite: !state.favourite, disabled: true })
    const request = await axios.post('/api/toggle-fav', { productId, accountId })
    setState({ ...state, disabled: false })
}

export default function AddtoFavourite({ favourite, productId, accountId }) {
    const [state, setState] = useState({ favourite, disabled: false })
    const classes = useStyles()
    return (
        <IconButton
            disabled={state.disabled}
            className={classes.heart}
            onClick={() => handleClick(state, setState, productId, accountId)}
        >
            <FavoriteIcon className={state ? classes.heartRed : ''} />
        </IconButton>
    )
}
