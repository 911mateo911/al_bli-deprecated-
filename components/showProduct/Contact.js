import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import CallIcon from '@material-ui/icons/Call'
import List from '@material-ui/core/List'
import FileCopyIcon from '@material-ui/icons/FileCopy'
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
    },
    copy: {
        padding: '2px'
    },
    text: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        paddingRight: '1rem',
        whiteSpace: 'nowrap',
        wordBreak: 'break-word'
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

                        <CopyToClipboard text={email} >
                            <ListItem button>
                                <ListItemIcon>
                                    <AlternateEmailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{ primary: classes.text }}
                                    primary={email} />
                                <ListItemSecondaryAction>
                                    <CopyToClipboard text={email} >
                                        <IconButton>
                                            <FileCopyIcon className={classes.copy} />
                                        </IconButton>
                                    </CopyToClipboard>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </CopyToClipboard>
                        <CopyToClipboard text={telephone} >
                            <ListItem button>
                                <ListItemIcon>
                                    <CallIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{ primary: classes.text }}
                                    primary={telephone} />
                                <ListItemSecondaryAction>
                                    <CopyToClipboard text={telephone} >
                                        <IconButton>
                                            <FileCopyIcon className={classes.copy} />
                                        </IconButton>
                                    </CopyToClipboard>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </CopyToClipboard>
                        <CopyToClipboard text={whatsapp}>
                            <ListItem button >
                                <ListItemIcon>
                                    <WhatsAppIcon />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{ primary: classes.text }}
                                    primary={whatsapp} />
                                <ListItemSecondaryAction>
                                    <CopyToClipboard text={whatsapp} >
                                        <IconButton>
                                            <FileCopyIcon className={classes.copy} />
                                        </IconButton>
                                    </CopyToClipboard>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </CopyToClipboard>
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
