import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../styles/newProduct/productForm.styles'
import { ValidatorForm } from 'react-material-ui-form-validator'
import TextInput from './TextInput'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CategorySelect from './CategorySelect'
import Car from './subCategories/Car'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import PriceInput from './PriceInput'
import { FormContext, DispatchContext } from '../contexts/newProductForm.context'

const useStyles = makeStyles(styles)

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3291ff'
        }
    }
})

export default function NewProductForm(props) {
    const classes = useStyles()
    const inputs = useContext(FormContext)
    const dispatch = useContext(DispatchContext)
    return (
        <div className={classes.root} >
            <h1 className={classes.h1} >Posto produktin tend:</h1>
            <h3 className={classes.h3} >Plotesoni formularin e meposhtem duke pershkruar ne menyre korrekte produktin.
            Publikimi i njoftimit eshte falas.</h3>
            <ValidatorForm noValidate className={classes.form} onSubmit={e => e.preventDefault()} >
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
                    <FormControl margin='normal' variant="filled" className={classes.select} >
                        <InputLabel id="demo-simple-select-outlined-label">Qyteti</InputLabel>
                        <Select
                            defaultValue=''
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Qyteti"
                            name='city'
                            value={inputs.city}
                            onChange={e => dispatch({ type: 'onChange', name: 'city', value: e.target.value })}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
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
                        </Select>
                    </FormControl>
                    <FormControl className={classes.select} margin='normal' variant='filled'>
                        <CategorySelect value={inputs.category} />
                    </FormControl>
                </div>
                {inputs.category === 'Makina' && <Car />}
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
        </div>
    )
}
