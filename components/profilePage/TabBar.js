import React, { memo, useContext } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import { ProfilePageDSC } from '../contexts/profilePage.context'
import { makeStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '90%',
        marginBottom: '10px',
        boxShadow: '0 7px 7px 0 rgb(0 0 0 / 5%)'
    }
})

const useStyles = makeStyles(styles)

function TabBar({ value, isOwner }) {
    const dispatch = useContext(ProfilePageDSC)
    const classes = useStyles()
    function handleChange(e, i) {
        dispatch({ type: 'setTabIndex', value: i })
    }
    return (
        <Paper
            className={classes.root}
            square
        >
            <Tabs
                centered
                variant='fullWidth'
                value={
                    isOwner ?
                        value :
                        0
                }
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="Postimet" />
                {isOwner && <Tab label="Te preferuarat" />}
            </Tabs>
        </Paper>
    )
}

export default memo(TabBar)