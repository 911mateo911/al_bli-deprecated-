import React, { useContext } from 'react'
import SettingsIcon from '@material-ui/icons/Settings'
import { ShowPageContext, ShowPageDispatch } from '../contexts/showPage.context'

export default function Settings({ classes }) {
    const state = useContext(ShowPageContext)
    const dispatch = useContext(ShowPageDispatch)
    return (
        <SettingsIcon
            onClick={e => dispatch({ type: 'openPopover', target: e.currentTarget })}
            className={Boolean(state.anchorEl) ? classes.settingsTilt : classes.settings}
        />
    )
}
