import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import styles from '../../styles/login/login.styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import IconButton from '@material-ui/core/IconButton'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { FlashMsgContext, FlashDispatchContext } from '../contexts/flashMsgs.context'

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
    const [credentials, changeCredentials] = useState({
        email: '',
        password: '',
        passwordShown: false
    })
    const dispatch = useContext(FlashDispatchContext)
    const snackbarOpen = useContext(FlashMsgContext)
    function handleChange(e) {
        changeCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    function togglePassword() {
        changeCredentials({ ...credentials, passwordShown: !credentials.passwordShown })
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    async function handleSubmit() {
        const response = await axios.post('/api/login', credentials)
        console.log(response)
    }
    return (
        <div className={classes.root}>
            <Avatar className={classes.icon} >
                <LockOutlinedIcon />
            </Avatar>
            <h1 className={classes.h1} >Logohu</h1>
            <p className={classes.p} >Kjo faqe perdor <a className={classes.cookies} href='https://sq.wikipedia.org/wiki/Cookie_(internet)' target='_blank' >cookies</a> per te te siguruar eksperiencen me te mire ne websiten tone.</p>
            <ValidatorForm noValidate onSubmit={handleSubmit} className={classes.form} >
                <span className={classes.span} >
                    <ThemeProvider theme={theme} >
                        <TextValidator
                            label='Email ose username'
                            fullWidth
                            margin='normal'
                            required
                            name='email'
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true
                            }}
                            value={credentials.email}
                            onChange={handleChange}
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
                            type={credentials.passwordShown ? 'text' : 'password'}
                            margin='normal'
                            required
                            name='password'
                            value={credentials.password}
                            onChange={handleChange}
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
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={togglePassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {credentials.passwordShown ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
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
