import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/client'
import Loader from '../components/Loader'
import { RegisterFormProvider } from '../components/contexts/registerForm.context'

const RegisterPageForm = dynamic(
    () => import('../components/register/RegisterPage'),
    { ssr: false }
)

export default function Rregjistrohu() {
    const [session, loading] = useSession()
    const isLoggedIn = Boolean(session)
    if (loading) {
        return <Loader />
    }
    return (
        <div className='page-Route' >
            <RegisterFormProvider>
                <RegisterPageForm isLoggedIn={session} />
            </RegisterFormProvider>
        </div>
    )
}