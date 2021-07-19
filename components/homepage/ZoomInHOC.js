import React, { useState } from 'react'
import Zoom from '@material-ui/core/Zoom'
import { Waypoint } from 'react-waypoint'

export default function ZoomInHOC(props) {
    const [zoomed, setZoomed] = useState(false)
    function zoomIn() {
        setZoomed(true)
    }
    function zoomOut() {
        setZoomed(false)
    }
    return (
        <Waypoint
            onEnter={zoomIn}
            onLeave={zoomOut}
        >
            <Zoom in={zoomed} timeout={500} >
                {props.children}
            </Zoom>
        </Waypoint>
    )
}
