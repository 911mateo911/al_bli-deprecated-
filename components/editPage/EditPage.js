import React, { useEffect, useContext, createContext, useState, useReducer } from 'react'
import { useSession } from 'next-auth/client'
import reducer from '../reducers/newProductForm.reducer'
import axios from 'axios'
import Loader from '../Loader'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import PriceInput from '../newProduct/PriceInput'
import caution from '../../public/caution.png'
import Keywords from '../newProduct/Keywords'
import styles from '../../styles/newProduct/productForm.styles'
import { useRouter } from 'next/router'
import { ValidatorForm, SelectValidator } from 'react-material-ui-form-validator'
import { FlashDispatchContext } from '../contexts/flashMsgs.context'
import Error from '../Error'
import FormControl from '@material-ui/core/FormControl'
import shoes from '../../public/shoes.png'
import TextInput from '../newProduct/TextInput'
import MenuItem from '@material-ui/core/MenuItem'
import CategorySelect from '../newProduct/CategorySelect'
import SubCategories from '../newProduct/subCategories'
import EditPhotos from './EditPhotos'
import resizePhotos from '../newProduct/photoResizer'
import Button from '@material-ui/core/Button'
import { clean, theme } from '../newProduct/newProductForm'

const FormContext = createContext()
const DispatchContext = createContext()

const useStyles = makeStyles(styles)

const flashMessages = {
    success: 'Produkti u ndryshua me sukses.',
    error: 'Ndodhi nje problem!'
}

export default function EditPage({ product, id }) {
    const flashDispatch = useContext(FlashDispatchContext)
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    if (product.notAuthorized) return (
        <Error
            src={caution.src}
            h1='Ndaluar!'
            desc='Nuk keni autorizim per te kryer kete veprim.'
        />
    )
    if (product.error) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
    const [inputs, dispatch] = useReducer(reducer, JSON.parse(product), () => JSON.parse(product))
    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const data = inputs
        const images = [...data.images]
        const form = new FormData()
        const photos = await resizePhotos(data.photos)
        photos.forEach(e => form.append('photos', e))
        data.toBeDeleted.forEach(e => form.append('toBeDeleted', e))
        data.photos = ''
        data.images = ''
        Object.keys(clean(data)).forEach(key => form.append(key, clean(data)[key])) // appending keys to form data
        form.append('id', id)
        const request = await axios.post('/api/edit-product', form)
        const response = await request.data
        data.photos = []
        flashDispatch({
            type: 'addMessage',
            message: flashMessages[response.message],
            severity: response.message
        })
        flashDispatch({ type: 'showSnackbar' })
        if (response.message === 'error') {
            data.images = images
            setLoading(false)
        }
        if (response.message === 'success') router.replace(response.redirectTo)
    }
    if (loading) return <Loader message='Po ngarkohet...' />
    return (
        <div className={classes.root} >
            <FormContext.Provider value={inputs} >
                <DispatchContext.Provider value={dispatch} >
                    <h1 className={classes.h1} >Ndrysho produktin:</h1>
                    <ValidatorForm
                        noValidate
                        className={classes.form}
                        onSubmit={handleSubmit}
                    >
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
                            value={inputs.telephone || ''}
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
                            <FormControl className={classes.select} margin='normal' variant='filled'>
                                <CategorySelect value={inputs.category} dispatch={dispatch} />
                            </FormControl>
                        </div>
                        <SubCategories dispatch={dispatch} context={FormContext} state={inputs.category} />
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
                        <EditPhotos
                            toBeDeleted={inputs.toBeDeleted}
                            dispatch={dispatch}
                            photos={inputs.photos}
                            images={inputs.images}
                        />
                        <Keywords value={inputs.keywords} dispatch={dispatch} />
                        <PriceInput
                            label='Cmimi'
                            name='price'
                            dispatch={dispatch}
                            value={inputs.price}
                            currency={inputs.currency}
                        />
                        <ThemeProvider theme={theme} >
                            <Button
                                className={classes.submitBtn}
                                color='primary'
                                type='submit'
                                variant='contained'
                            >Ruaj
                            </Button>
                        </ThemeProvider>
                    </ValidatorForm>
                </DispatchContext.Provider>
            </FormContext.Provider>
        </div>
    )
}
