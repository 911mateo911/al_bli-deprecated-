import React, { useContext, useState, useEffect } from 'react'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import styles from '../../styles/login/login.styles'
import Avatar from '@material-ui/core/Avatar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import infinity from '../../public/infinity.svg'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../login/LoginPage'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '../newProduct/Snackbar'
import { clean } from '../newProduct/newProductForm'
import TextInput from '../newProduct/TextInput'
import ProfilePicker from './ProfilePicker'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import Loader from '../Loader'
import { FlashMsgContext, FlashDispatchContext } from '../contexts/flashMsgs.context'
import { RegisterFormContext, RegisterFormDispatch } from '../contexts/registerForm.context'

const useStyles = makeStyles(styles)

const addValidation = (value) => {
    ValidatorForm.addValidationRule(`isPassword`, (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/.test(value.trim())
    })
}

export default function RegisterPage() {
    const inputs = useContext(RegisterFormContext)
    const dispatch = useContext(RegisterFormDispatch)
    const flashDispatch = useContext(FlashDispatchContext)
    const snackbarOpen = useContext(FlashMsgContext)
    const router = useRouter()
    useEffect(() => {
        addValidation(inputs.password)
    }, [])
    const classes = useStyles()
    const [state, setState] = useState({ passwordShown: false, loading: false })
    function togglePassword() {
        setState({ ...state, passwordShown: !state.passwordShown })
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    async function handleSubmit(e) {
        e.preventDefault()
        setState({ ...state, loading: true })
        const avatar = inputs.profilePic
        const form = new FormData()
        inputs.profilePic.slice(0, 1).forEach(e => form.append('profilePic', e))
        inputs.profilePic = ''
        Object.keys(clean(inputs)).forEach(key => form.append(key, clean(inputs)[key]))
        const request = await axios.post('/api/register-user', form)
        const response = await request.data
        flashDispatch({
            type: 'addMessage',
            message: response.errorMsg || response.successMsg,
            severity: response.message
        })
        flashDispatch({ type: 'showSnackbar' })
        inputs.profilePic = avatar
        if (response.message === 'error') setState({ ...state, loading: false })
        if (response.message === 'success') router.replace(response.redirectTo)
    }
    if (state.loading) {
        return (<Loader src={infinity.src} />)
    }
    return (
        <div className={classes.root} >
            {snackbarOpen && <Snackbar />}
            <Avatar className={classes.icon} >
                <VpnKeyIcon />
            </Avatar>
            <h1 className={classes.h1} >Rregjistrohu</h1>
            <p className={classes.p} >Duke u rregjistruar ti pranon te perdoresh <a className={classes.cookies} href='https://sq.wikipedia.org/wiki/Cookie_(internet)' target='_blank' >cookies</a>.</p>
            <ValidatorForm noValidate onSubmit={handleSubmit} className={classes.form} >
                <span className={classes.span} >
                    <ProfilePicker file={inputs.profilePic} />
                    <TextInput
                        label='Emer Mbiemer'
                        name='name'
                        type=''
                        value={inputs.name}
                        dispatch={dispatch}
                        validate
                    />
                    <TextInput
                        label='Email'
                        name='email'
                        type=''
                        value={inputs.email}
                        dispatch={dispatch}
                        validate
                    />
                    <TextInput
                        label='Telefon'
                        name='telephone'
                        type='numeric'
                        value={inputs.telephone}
                        dispatch={dispatch}
                        validate
                    />
                    <TextValidator
                        label='Password'
                        fullWidth
                        type={state.passwordShown ? 'text' : 'password'}
                        margin='normal'
                        required
                        name='password'
                        value={inputs.password}
                        onChange={e => dispatch({ type: 'onChange', name: e.target.name, value: e.target.value })}
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true
                        }}
                        inputProps={{
                            inputMode: 'text',
                            maxLength: 50
                        }}
                        validators={['required', 'isPassword']}
                        errorMessages={['Kerkohet!', 'Password duhet te kete 8 shifra, nje leter kapitale dhe nje numer.']}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {state.passwordShown ? <Visibility /> : <VisibilityOff />}
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
                    <p className={classes.pReg} >Keni nje adrese? <Link href='/kycu' ><a className={classes.register} > Kycu ketu</a></Link> </p>
                </span>
            </ValidatorForm>
        </div>
    )
}
