import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FadeIn from 'react-fade-in';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 'auto',
        [theme.breakpoints.down(theme.breakpoints.values.xs + 420)] : {
            justifyContent: 'space-around'
        }
    }
})

const useStyles = makeStyles(styles)

export default function FadeInHoc({ children }) {
    const classes = useStyles()
    return (
        <FadeIn transitionDuration={500} className={classes.root} >
            {children}
        </FadeIn>
    )
}
