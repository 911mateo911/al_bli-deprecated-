import React, { useContext, memo } from 'react'
import { ShowPageDispatch } from '../contexts/showPage.context'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'

function ShareProduct({ classes }) {
    const dispatch = useContext(ShowPageDispatch)
    return (
        <IconButton
            className={classes.share}
            onClick={() => dispatch({ type: 'openShareDialog' })}
        >
            <ShareIcon />
        </IconButton>
    )
}

export default memo(ShareProduct)