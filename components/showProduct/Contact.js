import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import CallIcon from '@material-ui/icons/Call'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
    root: {
        width: '100%',
        margin: '5px'
    },
    accordion: {
        boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)'
    },
    heading: {
        fontSize: '0.9rem',
        flexBasis: '33.33%',
        flexShrink: 0,
        fontFamily: 'Lato',
        fontWeight: '700'
    },
    secondaryHeading: {
        fontSize: '0.8rem',
        color: theme.palette.text.secondary,
        fontFamily: 'Lato',
        fontWeight: '400'
    },
    list: {
        width: '100%',
        marginTop: '-10px'
    }
})

const useStyles = makeStyles(styles)

export default function Contact({ email, whatsapp, telephone }) {
    const [expanded, setExpanded] = useState(false)
    function toggle() {
        setExpanded(!expanded)
    }
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Accordion
                className={classes.accordion}
                expanded={expanded}
                onChange={toggle} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Kontakt</Typography>
                    <Typography className={classes.secondaryHeading}>Fshehur per arsye privatesie</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List component='nav' className={classes.list} >
                        <ListItem button>
                            <ListItemIcon>
                                <AlternateEmailIcon />
                            </ListItemIcon>
                            <ListItemText primary={email} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CallIcon />
                            </ListItemIcon>
                            <ListItemText primary={telephone} />
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                <WhatsAppIcon />
                            </ListItemIcon>
                            <ListItemText primary={whatsapp} />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
