import React from 'react'
import styles from '../../styles/showPage/showPage.styles'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from './Carousel'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(styles)

export default function ShowPage() {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Carousel />
            <div className={classes.details} >
                <span className={classes.user} >
                    <Avatar alt='Mateo Malaj' src='https://images.unsplash.com/photo-1571224736343-7182962ae3e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80' />
                    <h4 className={classes.username} >Mateo Malaj</h4>
                    <p className={classes.date} >19/08/2021</p>
                </span>
                <Divider className={classes.divider} />
                <h1 className={classes.h1} >
                    Shitet X5 2019 3.5 cdi nafte timon anglez.
                </h1>
            </div>
        </div>
    )
}
