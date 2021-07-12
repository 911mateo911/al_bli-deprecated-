import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/newProduct/productForm.styles'
import { SelectValidator, ValidatorForm } from 'react-material-ui-form-validator'
import TextInput from './TextInput'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import CategorySelect from './CategorySelect'
import SubCategories from './subCategories'
import { useRouter } from 'next/router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import PriceInput from './PriceInput'
import Keywords from './Keywords'
import axios from 'axios'
import Loader from '../Loader'
import { FlashDispatchContext } from '../contexts/flashMsgs.context'
import FilePicker from './FIlePicker'
import { FormContext, DispatchContext } from '../contexts/newProductForm.context'

const useStyles = makeStyles(styles)

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3291ff'
        }
    }
})

const flashMessages = {
    success: 'Postimi u ngarkua me sukses!',
    error: 'Pati nje problem gjate ngarkimit!'
}

export const clean = obj => {
    for (let key in obj) {
        if (obj[key] === '' || obj[key] === []) {
            delete obj[key]
        }
    }
    return obj
}

export default function NewProductForm({ isLoggedIn }) {
    const classes = useStyles()
    const inputs = useContext(FormContext)
    const dispatch = useContext(DispatchContext)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const flashDispatch = useContext(FlashDispatchContext)
    useEffect(() => {
        if (!isLoggedIn) {
            flashDispatch({
                type: 'addMessage',
                message: 'Duhet te kyceni per te vazhduar!',
                severity: 'error'
            })
            flashDispatch({ type: 'showSnackbar' })
            router.push('/kycu')
        }
    }, [])
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const data = inputs
        const form = new FormData()
        data.photos.forEach(e => form.append('photos', e)) // adding photos to form data
        data.photos = '' // made here so it will be cleaned with the below method
        Object.keys(clean(data)).forEach(key => form.append(key, clean(data)[key])) // appending keys to form data
        const request = await axios.post('/api/add-product', form)
        const response = await request.data
        data.photos = []
        flashDispatch({
            type: 'addMessage',
            message: flashMessages[response.message],
            severity: response.message
        })
        flashDispatch({ type: 'showSnackbar' })
        if (response.message === 'error') setLoading(false)
        if (response.message === 'success') router.replace(response.redirectTo)
    }
    if (!isLoggedIn) return <Loader />
    if (loading) return <Loader message='Po ngarkohet...' />
    return (
        <div className={classes.root} >
            <h1 className={classes.h1} >Posto produktin tend:</h1>
            <h3 className={classes.h3} >Plotesoni formularin e meposhtem duke pershkruar ne menyre korrekte produktin.
                Publikimi i njoftimit eshte falas.</h3>
            <ValidatorForm noValidate className={classes.form} onSubmit={handleSubmit} >
                <TextInput
                    label='Emer Mbiemer'
                    type=''
                    name='name'
                    validate
                    dispatch={dispatch}
                    value={inputs.name}
                />
                <TextInput
                    label='Email'
                    type=''
                    validate
                    dispatch={dispatch}
                    name='email'
                    value={inputs.email}
                />
                <TextInput
                    label='Telefon'
                    type='numeric'
                    validate
                    dispatch={dispatch}
                    name='telephone'
                    value={inputs.telephone}
                />
                <TextInput
                    label='Whatsapp'
                    type='numeric'
                    name='whatsapp'
                    validate
                    dispatch={dispatch}
                    value={inputs.whatsapp}
                />
                <div className={classes.selectWrap} >
                    <FormControl margin='normal' className={classes.select} >
                        <SelectValidator
                            defaultValue=''
                            id="demo-simple-select-outlined"
                            label="Qyteti"
                            fullWidth
                            variant="filled"
                            name='city'
                            value={inputs.city}
                            validators={['required']}
                            errorMessages={['Kerkohet!']}
                            onChange={e => dispatch({ type: 'onChange', name: 'city', value: e.target.value })}
                        >
                            <MenuItem value='Berat' >Berat</MenuItem>
                            <MenuItem value='Diber' >Diber</MenuItem>
                            <MenuItem value='Durres' >Durres</MenuItem>
                            <MenuItem value='Elbasan' >Elbasan</MenuItem>
                            <MenuItem value='Fier' >Fier</MenuItem>
                            <MenuItem value='Gjirokaster' >Gjirokaster</MenuItem>
                            <MenuItem value='Korce' >Korce</MenuItem>
                            <MenuItem value='Kukes' >Kukes</MenuItem>
                            <MenuItem value='Lezhe' >Lezhe</MenuItem>
                            <MenuItem value='Shkoder' >Shkoder</MenuItem>
                            <MenuItem value='Tirane' >Tirane</MenuItem>
                            <MenuItem value='Vlore' >Vlore</MenuItem>
                        </SelectValidator>
                    </FormControl>
                    <FormControl
                        className={classes.select}
                        margin='normal'
                        variant='filled'
                    >
                        <CategorySelect
                            value={inputs.category}
                            context={FormContext}
                            dispatch={dispatch}
                        />
                    </FormControl>
                </div>
                <SubCategories
                    dispatch={dispatch}
                    context={FormContext}
                    state={inputs.category}
                />
                <TextInput
                    label='Titulli'
                    type=''
                    dispatch={dispatch}
                    name='title'
                    validate
                    value={inputs.title}
                />
                <TextInput
                    label='Pershkrimi'
                    type=''
                    name='description'
                    multiLine
                    validate
                    dispatch={dispatch}
                    value={inputs.description}
                />
                <FilePicker
                    files={inputs.photos}
                    maxCount={10}
                    dispatch={dispatch}
                />
                <Keywords value={inputs.keywords} dispatch={dispatch} />
                <PriceInput
                    label='Cmimi'
                    name='price'
                    value={inputs.price}
                    currency={inputs.currency}
                />
                <h3 className={classes.h3} >Produkti mund te editohet ose fshihet me vone.</h3>
                <ThemeProvider theme={theme} >
                    <Button
                        className={classes.submitBtn}
                        color='primary'
                        type='submit'
                        variant='contained'
                    >Vazhdo</Button>
                </ThemeProvider>
            </ValidatorForm>
        </div >
    )
}
