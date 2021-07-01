import React, { useContext, useState } from 'react'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
import Loader from '../Loader'
import Snackbar from '../newProduct/Snackbar'
import infinity from '../../public/infinity.svg'
import { FlashMsgContext, FlashDispatchContext } from '../contexts/flashMsgs.context'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0070f3'
        },
        secondary: {
            main: '#3291ff'
        }
    }
})

const flashMessages = {
    success: 'Mirese u ktheve!',
    error: 'Email ose password nuk eshte i sakte!'
}

const useStyles = makeStyles(styles)

export default function LoginPage() {
    const classes = useStyles()
    const [credentials, changeCredentials] = useState({
        email: '',
        password: '',
        passwordShown: false,
        loading: false
    })
    const dispatch = useContext(FlashDispatchContext)
    const snackbarOpen = useContext(FlashMsgContext)
    const router = useRouter()
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
        const { email, password } = credentials
        changeCredentials({ ...credentials, loading: true })
        const req = await signIn('credentials', {
            email,
            password,
            redirect: false
        })
        const loggedIn = await req.error
        const message = req.error ? 'error' : 'success'
        dispatch({
            type: 'addMessage',
            message: flashMessages[message],
            severity: message
        })
        dispatch({ type: 'showSnackbar' })
        if (req.error) changeCredentials({ ...credentials, loading: false })
        else router.replace('/')
    }
    if (credentials.loading) {
        return <Loader src={infinity.src} />
    }
    return (
        <div className={classes.root}>
            <Snackbar />
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
