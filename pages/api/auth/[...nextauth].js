import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
    Providers.Credentials({
        name: 'Credentials',
        authorize: async (credentials) => {
            console.log(credentials)
            return { status: 'success', credentials }
        }
    })
]

const callbacks = {
    // async jwt(token, user) {
    //     if (user) {
    //         token.accessToken = user.data.token
    //     }

    //     return token
    // },
    async session(session, token) {
        session.accessToken = token.accessToken
        return session
    }
}

const options = {
    providers,
    callbacks,
    pages: {
        error: '/kycu' // Changing the error redirect page to our custom login page
    }
}

export default (req, res) => NextAuth(req, res, options)