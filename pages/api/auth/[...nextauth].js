import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import dbConnection from '../../../utils/dbConnection'
import User from '../../../models/User'
import bcrypt from 'bcrypt'
import CustomError from '../../../middlewares/customError'
import validationSchema from '../../../validators/credentials.validation'

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            authorize: async (credentials) => {
                try {
                    await dbConnection()
                    const credentialsValidation = validationSchema.validate(credentials)
                    if (credentialsValidation.error) {
                        throw new CustomError('Ndodhi nje problem!', 400)
                    }
                    const registeredUser = await User.findOne({ email: credentials.email })
                    if (!registeredUser) {
                        throw new CustomError('Email ose password nuk eshte i sakte', 400)
                    }
                    const user = await bcrypt.compare(credentials.password, registeredUser.password)
                    if (user) {
                        registeredUser.image = registeredUser
                        return registeredUser
                    } else {
                        throw new CustomError('Email ose password nuk eshte i sakte', 400)
                    }
                } catch (e) {
                    return null
                }
            }
        })
    ],
    secret: process.env.COOKIE_SECRET,
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        encryption: true
    },
    callbacks: {
        jwt: async (token, user) => {
            user && (token.user = user);
            return Promise.resolve(token)
        },
        session: async (session, user, sessionToken) => {
            delete user.user.password
            delete user.user.__v
            session.user = user.user
            return Promise.resolve(session)
        }
    }
})