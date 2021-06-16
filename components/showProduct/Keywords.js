import React from 'react'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/showPage/keywords.styles'

const useStyles = makeStyles(styles)

export default function Keywords({ list }) {
    const classes = useStyles()
    return (
        <span className={classes.root} >
            <h4 className={classes.keyH1}>Fjale Kyce:</h4>
            {list.map((k, i) => (
                <Chip
                    className={classes.key}
                    label={k}
                    key={i}
                    onClick={e => console.log(e)}
                    avatar={
                        <Avatar
                            className={classes.chipAvatar} >
                            {k[0].toUpperCase()}
                        </Avatar>
                    }
                />
            ))}
        </span>
    )
}
