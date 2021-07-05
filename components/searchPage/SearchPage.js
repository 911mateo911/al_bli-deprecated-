import React from 'react'
import Searchbar from './Searchbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/searchPage/searchPage.styles'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(styles)

export default function SearchPage() {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Searchbar />
            <h1 className={classes.h1} >Rezultate</h1>
            <Divider className={classes.divider} />
        </div>
    )
}