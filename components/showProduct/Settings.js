import React, { useContext } from 'react'
import SettingsIcon from '@material-ui/icons/Settings'
import IconButton from '@material-ui/core/IconButton'
import { ShowPageContext, ShowPageDispatch } from '../contexts/showPage.context'

export default function Settings({ classes }) {
    const state = useContext(ShowPageContext)
    const dispatch = useContext(ShowPageDispatch)
    return (
        <IconButton
            className={Boolean(state.anchorEl) ? classes.settingsTilt : classes.settings}
            onClick={e => dispatch({ type: 'openPopover', target: e.currentTarget })}
        >
            <SettingsIcon />
        </IconButton>
    )
}
