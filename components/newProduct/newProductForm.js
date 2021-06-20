import React, { useContext, useState } from 'react'
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
import CircularProgress from '@material-ui/core/CircularProgress'
import { FlashDispatchContext, FlashMsgContext } from '../contexts/flashMsgs.context'
import Snackbar from '../newProduct/Snackbar'
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

const clean = obj => {
    for (let key in obj) {
        if (obj[key] === '') {
            delete obj[key]
        }
    }
    return obj
}

export default function NewProductForm(props) {
    const classes = useStyles()
    const inputs = useContext(FormContext)
    const dispatch = useContext(DispatchContext)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const flashDispatch = useContext(FlashDispatchContext)
    const snackbarOpen = useContext(FlashMsgContext)
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const request = await axios.post('/api/add-product', {
            data: clean(inputs)
        })
        const response = await request.data
        flashDispatch({
            type: 'addMessage',
            message: flashMessages[response.message],
            severity: response.message
        })
        flashDispatch({ type: 'showSnackbar' })
        if (response.message === 'error') setLoading(false)
        if (response.message === 'success') router.replace('/')
    }
    const loader = (
        <div className={classes.loaderWrap} >
            <ThemeProvider theme={theme} >
                <CircularProgress color='primary' />
                <h3 className={classes.loaderText} >Duke ngarkuar...</h3>
            </ThemeProvider>
        </div>
    )
    return (
        loading ? loader : (<div className={classes.root} >
            {snackbarOpen && <Snackbar />}
            <h1 className={classes.h1} >Posto produktin tend:</h1>
            <h3 className={classes.h3} >Plotesoni formularin e meposhtem duke pershkruar ne menyre korrekte produktin.
                Publikimi i njoftimit eshte falas.</h3>
            <ValidatorForm noValidate className={classes.form} onSubmit={handleSubmit} >
                <TextInput
                    label='Emer Mbiemer'
                    type=''
                    multiLine={false}
                    name='name'
                    value={inputs.name}
                />
                <TextInput
                    label='Telefon'
                    type='numeric'
                    multiLine={false}
                    name='telephone'
                    value={inputs.telephone}
                />
                <TextInput
                    label='Email'
                    type=''
                    multiLine={false}
                    name='email'
                    value={inputs.email}
                />
                <TextInput
                    label='Whatsapp'
                    type='numeric'
                    multiLine={false}
                    name='whatsapp'
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
                        <CategorySelect value={inputs.category} />
                    </FormControl>
                </div>
                <SubCategories state={inputs.category} />
                <TextInput
                    label='Titulli'
                    type=''
                    multiLine={false}
                    name='title'
                    value={inputs.title}
                />
                <TextInput
                    label='Pershkrimi'
                    type=''
                    name='description'
                    multiLine={true}
                    value={inputs.description}
                />
                <Keywords value={inputs.keywords} />
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
        </div >)
    )
}
