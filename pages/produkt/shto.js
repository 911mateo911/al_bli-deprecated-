import React from 'react'
import NewProductForm from '../../components/newProduct/newProductForm'
import { FormProvider } from '../../components/contexts/newProductForm.context'

export default function Shit() {
    return (
        <div>
            <FormProvider>
                <NewProductForm />
            </FormProvider>
        </div>
    )
}
