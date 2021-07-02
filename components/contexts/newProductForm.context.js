import React, { createContext, useReducer } from 'react'
import reducer from '../reducers/newProductForm.reducer'
import { formattedDate } from '../newProduct/subCategories/Car'
import { useSession } from 'next-auth/client'

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
    subDekorime: '',
    photos: []
}

export const FormContext = createContext()
export const DispatchContext = createContext()

export function FormProvider(props) {
    const [session, loading] = useSession()
    function getInitialValues() {
        const values = initialValues
        if (session) {
            initialValues.name = session.user.name
            initialValues.email = session.user.email
            initialValues.telephone = session.user.telephone
            return values
        } else {
            return initialValues
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValues, getInitialValues)
    return (
        <FormContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch} >
                {props.children}
            </DispatchContext.Provider>
        </FormContext.Provider>
    )
}