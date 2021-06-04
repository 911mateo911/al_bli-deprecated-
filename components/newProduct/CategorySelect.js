import React, { useContext, memo } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DispatchContext } from '../contexts/newProductForm.context'

function CategorySelect({ value }) {
    const bgWhite = { backgroundColor: '#f2f2f2' }
    const dispatch = useContext(DispatchContext)
    return (
        <>
            <InputLabel htmlFor="grouped-select">Kategoria</InputLabel>
            <Select
                defaultValue=""
                label='Kategoria'
                id="grouped-select"
                value={value}
                onChange={e => dispatch({ type: 'onChange', name: 'category', value: e.target.value })}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <ListSubheader style={bgWhite} color='primary' >Automjete</ListSubheader>
                <MenuItem value='Makina'>Makina</MenuItem>
                <MenuItem value='Motorcikleta'>Motorcikleta</MenuItem>
                <MenuItem value='Pjese Kembimi'>Pjese Kembimi</MenuItem>
                <MenuItem value='Makina te demtuara'>Makina te demtuara</MenuItem>
                <MenuItem value='Makina kamping'>Makina kamping</MenuItem>
                <MenuItem value='Makina bujqesore'>Makina bujqesore</MenuItem>
                <MenuItem value='Makina te renda'>Makina te renda</MenuItem>
                <MenuItem value='Anije'>Anije</MenuItem>
                <MenuItem value='Jet ski'>Jet ski</MenuItem>
                <ListSubheader style={bgWhite} color='primary' >Vendbanime</ListSubheader>
                <MenuItem value='Shtepi'>Shtepi</MenuItem>
                <MenuItem value='Apartamente'>Apartamente</MenuItem>
                <MenuItem value='Dhoma'>Dhoma</MenuItem>
                <MenuItem value='Vila'>Vila</MenuItem>
                <MenuItem value='Garazhe'>Garazhe</MenuItem>
                <MenuItem value='Toke/Ferma'>Toke/Ferma</MenuItem>
                <MenuItem value='Prone tjeter'>Prone tjeter</MenuItem>
                <ListSubheader style={bgWhite} color='primary' >Shtepiake</ListSubheader>
                <MenuItem value='Dekorime'>Dekorime</MenuItem>
                <MenuItem value='Vegla'>Vegla</MenuItem>
                <MenuItem value='Kopshti'>Kopshti</MenuItem>
                <MenuItem value='Per femije'>Per Femije</MenuItem>
                <MenuItem value='Materiale ndertimi'>Materiale ndertimi</MenuItem>
                <ListSubheader style={bgWhite} color='primary' >Elektronika</ListSubheader>
                <MenuItem value='Telefona'>Telefona</MenuItem>
                <MenuItem value='Pjese celularesh'>Pjese celularesh</MenuItem>
                <MenuItem value='Aksesore celularesh'>Aksesore celularesh</MenuItem>
                <MenuItem value='PC'>PC</MenuItem>
                <MenuItem value='Pjese kompjuterash'>Pjese kompjuterash</MenuItem>
                <MenuItem value='Pajisje audio'>Pajisje audio</MenuItem>
                <MenuItem value='Konsole/Video lojera'>Konsole/Video lojera</MenuItem>
                <MenuItem value='TV/DVD/Fotoaparate'>TV/DVD/Fotoaparate</MenuItem>
                <ListSubheader style={bgWhite} color='primary' >Sport/Outdoor</ListSubheader>
                <MenuItem value='Pajisje sportive'>Pajisje sportive</MenuItem>
                <MenuItem value='Kamping'>Kamping</MenuItem>
                <MenuItem value='Kafshe shtepiake'>Kafshe shtepiake</MenuItem>
                <ListSubheader color='primary' style={bgWhite} >Veshje/Indoor</ListSubheader>
                <MenuItem value='Veshje'>Veshje</MenuItem>
                <MenuItem value='Kepuce'>Kepuce</MenuItem>
                <MenuItem value='Aksesore/Ora'>Aksesore/Ora</MenuItem>
                <MenuItem value='Libra/Revista'>Libra/Revista</MenuItem>
                <MenuItem value='Artikuj per koleksion'>Artikuj per koleksion</MenuItem>
                <MenuItem value='Historike'>Historike</MenuItem>
                <MenuItem value='Souvenir'>Souvenir</MenuItem>
                <ListSubheader style={bgWhite} color='primary' >Biznes/Pune</ListSubheader>
                <MenuItem value='Ambiente biznesi'>Ambiente biznesi</MenuItem>
                <MenuItem value='Pajisje Zyre'>Pajisje Zyre</MenuItem>
                <MenuItem value='Shitje me shumice'>Shitje me shumice</MenuItem>
                <MenuItem value='Sherbime'>Sherbime</MenuItem>
                <MenuItem value='Vende pune'>Vende pune</MenuItem>
                <MenuItem value='Tjeter' >Tjeter</MenuItem>
            </Select>
        </>
    )
}

export default memo(CategorySelect)