import React from 'react'
import Link from 'next/link'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import styles from '../../styles/login/login.styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0070f3'
        },
        secondary: {
            main: '#3291ff'
        }
    }
})

const useStyles = makeStyles(styles)

export default function LoginPage() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Avatar className={classes.icon} >
                <LockOutlinedIcon />
            </Avatar>
            <h1 className={classes.h1} >Logohu</h1>
            <p className={classes.p} >Kjo faqe perdor <a className={classes.cookies} href='https://sq.wikipedia.org/wiki/Cookie_(internet)' target='_blank' >cookies</a> per te te siguruar eksperiencen me te mire ne websiten tone.</p>
            <ValidatorForm noValidate onSubmit={() => console.log('sadssda')} className={classes.form} >
                <span className={classes.span} >
                    <ThemeProvider theme={theme} >
                        <TextValidator
                            label='Email ose emri'
                            fullWidth
                            margin='normal'
                            required
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                inputMode: 'text',
                                maxLength: 50
                            }}
                            validators={['required']}
                            errorMessages={['Kerkohet!']}
                        />
                        <TextValidator
                            label='Password'
                            fullWidth
                            margin='normal'
                            required
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                inputMode: 'text',
                                maxLength: 50
                            }}
                            validators={['required']}
                            errorMessages={['Kerkohet!']}
                        />
                        <ThemeProvider theme={theme} >
                            <Button
                                className={classes.submitBtn}
                                color='secondary'
                                type='submit'
                                variant='contained'
                            >Vazhdo</Button>
                        </ThemeProvider>
                    </ThemeProvider>
                    <p className={classes.pReg} >Nuk ke nje adrese? <Link href='/rregjistrohu' ><a className={classes.register} > Rregjistrohu ketu</a></Link> </p>
                </span>
            </ValidatorForm>
        </div>
    )
}
