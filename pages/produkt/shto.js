import React from 'react'
import { FormProvider } from '../../components/contexts/newProductForm.context'
import dynamic from 'next/dynamic'

const NewProductForm = dynamic(
    () => import('../../components/newProduct/newProductForm'),
    { ssr: false }
)

export default function Shit() {
    return (
        <div>
            <FormProvider>
                <NewProductForm />
            </FormProvider>
        </div>
    )
}
