import React from 'react'
import { FormProvider } from '../../components/contexts/newProductForm.context'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/client'
import Loader from '../../components/Loader'

const NewProductForm = dynamic(
    () => import('../../components/newProduct/newProductForm'),
    { ssr: false }
)

export default function Shit() {
    const [session, loading] = useSession()
    if (loading) {
        return <Loader />
    }
    return (
        <div>
            <FormProvider>
                <NewProductForm isLoggedIn={Boolean(session)} />
            </FormProvider>
        </div>
    )
}
