import dynamic from 'next/dynamic'
import Loader from '../components/Loader'
import { useSession } from "next-auth/client"

const LoginPageForm = dynamic(
    () => import('../components/login/LoginPage'),
    { ssr: false }
)

export default function Kycu() {
    const [session, loading] = useSession()
    const isLoggedIn = Boolean(session)
    if (loading) {
        return <Loader />
    }
    return (
        <div className='page-Route' >
            <LoginPageForm isLoggedIn={session} />
        </div>
    )
}