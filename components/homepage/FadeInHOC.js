import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Waypoint } from 'react-waypoint'
import clsx from 'clsx'

const styles = theme => ({
    root: {
        opacity: 0,
        transition: props => `opacity ${props.seconds}s`
    },
    fadeIn: {
        opacity: 1
    }
})

const useStyles = makeStyles(styles)

export default function ZoomInHOC(props) {
    const [faded, setFaded] = useState(false)
    const classes = useStyles(props)
    function fadeIn() {
        setFaded(true)
    }
    function fadeOut() {
        setFaded(false)
    }
    return (
        <Waypoint
            onEnter={fadeIn}
            onLeave={fadeOut}
        >
            <span className={clsx(classes.root, faded && classes.fadeIn)} >
                {props.children}
            </span>
        </Waypoint>
    )
}
