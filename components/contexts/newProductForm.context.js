import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/newProductForm.reducer'
import { formattedDate } from '../newProduct/subCategories/Car'

const initialValues = {
    name: '',
    telephone: '',
    email: '',
    whatsapp: '',
    city: '',
    category: '',
    title: '',
    description: '',
    price: '',
    currency: 'Lek',
    keywords: ['shitet'],
    siperfaqe: '',
    nrDhoma: '',
    adresa: '',
    kate: '',
    marka: '',
    modeli: '',
    viti: '',
    kilometra: '',
    karburanti: '',
    transmisioni: '',
    subAnije: '',
    viti: formattedDate(new Date()),
    subPjeseKembimi: '',
    subMakinaBujqesore: '',
    subDekorime: ''
}

export const FormContext = createContext()
export const DispatchContext = createContext()

export function FormProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialValues, () => initialValues)
    return (
        <FormContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch} >
                {props.children}
            </DispatchContext.Provider>
        </FormContext.Provider>
    )
}