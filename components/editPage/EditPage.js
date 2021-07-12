import React, { useEffect, useContext, createContext, useReducer } from 'react'
import { useSession } from 'next-auth/client'
import reducer from '../reducers/newProductForm.reducer'
import { makeStyles } from '@material-ui/core/styles'
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
import Loader from '../Loader'
import CategorySelect from '../newProduct/CategorySelect'
import SubCategories from '../newProduct/subCategories'

const FormContext = createContext()
const DispatchContext = createContext()

const useStyles = makeStyles(styles)

export default function EditPage({ product }) {
    const flashDispatch = useContext(FlashDispatchContext)
    const classes = useStyles()
    const [session, loading] = useSession()
    if (loading) return <Loader />
    if (product.error) {
        return (
            <Error
                src={shoes.src}
                h1='Faqja nuk u gjend!'
                desc='Pati nje ngaterrese :('
            />
        )
    }
    const router = useRouter()
    useEffect(() => {
        try {
            if (!Boolean(session)) {
                flashDispatch({
                    type: 'addMessage',
                    message: 'Duhet te kyceni per te vazhduar!',
                    severity: 'error'
                })
                flashDispatch({ type: 'showSnackbar' })
                return router.push('/kycu')
            }
            const { seller } = JSON.parse(product)
            if (session.user._id !== seller.toString()) {
                flashDispatch({
                    type: 'addMessage',
                    message: 'Ju nuk keni autorizim per kete veprim.',
                    severity: 'error'
                })
                flashDispatch({ type: 'showSnackbar' })
                return router.back()
            }
        }
        catch (e) {
            return
        }
    }, [])
    const [inputs, dispatch] = useReducer(reducer, JSON.parse(product), () => JSON.parse(product))
    return (
        <div className={classes.root} >
            <FormContext.Provider value={inputs} >
                <DispatchContext.Provider value={dispatch} >
                    <h1 className={classes.h1} >Ndrysho produktin:</h1>
                    <ValidatorForm
                        noValidate
                        className={classes.form}
                        onSubmit={() => console.log('asdsasaasasd')}
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
                        <Keywords value={inputs.keywords} dispatch={dispatch} />
                    </ValidatorForm>
                </DispatchContext.Provider>
            </FormContext.Provider>
        </div>
    )
}
