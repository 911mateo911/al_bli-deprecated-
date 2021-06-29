import React, { useContext, useState, useEffect } from 'react'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import styles from '../../styles/login/login.styles'
import Avatar from '@material-ui/core/Avatar'
import Link from 'next/link'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../login/LoginPage'
import Button from '@material-ui/core/Button'
import TextInput from '../newProduct/TextInput'
import ProfilePicker from './ProfilePicker'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
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
    return (
        <div className={classes.root} >
            <Avatar className={classes.icon} >
                <VpnKeyIcon />
            </Avatar>
            <h1 className={classes.h1} >Rregjistrohu</h1>
            <p className={classes.p} >Duke u rregjistruar ti pranon te perdoresh <a className={classes.cookies} href='https://sq.wikipedia.org/wiki/Cookie_(internet)' target='_blank' >cookies</a>.</p>
            <ValidatorForm noValidate onSubmit={() => console.log('asdasdass')} className={classes.form} >
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
