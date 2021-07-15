import dbConnection from '../../utils/dbConnection'
import User from '../../models/User'
import materialColors from '../../components/materialColors'
import bcrypt from 'bcrypt'
import sharp from 'sharp'
import formidable from 'formidable'
import CustomError from '../../middlewares/customError'
import validationSchema from '../../validators/registerForm.validation'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const uploadProfilePic = async pic => {
    return new Promise(async (resolve, reject) => {
        let image = ''
        await sharp(pic.path).resize({
            fit: sharp.fit.contain,
            height: 300
        }).withMetadata().toBuffer().then(img => {
            const base64 = img.toString('base64')
            image = `data:image/jpeg;base64,${base64}`
        })
        cloudinary.v2.uploader.upload(image, {
            folder: 'alBli'
        }, (err, res) => {
            if (err) reject({ message: 'error' })
            else resolve({
                url: res.secure_url,
                filename: res.public_id
            })
        })
    })
}

export default async function handler(req, res) {
    try {
        await dbConnection()
        const form = formidable({ multiples: true })
        form.parse(req, async (err, fields, file) => {
            try {
                const data = fields
                const isAlreadyRegistered = await User.find({ email: data.email })
                if (isAlreadyRegistered.length) {
                    throw new CustomError('Nje perdorues me te njejten email eshte rregjistruar!', 400)
                }
                const user = validationSchema.validate(data)
                if (user.error) {
                    throw new CustomError('Ndodhi nje gabim', 400)
                }
                if (file.profilePic) {
                    const profileUrl = await uploadProfilePic(file.profilePic)
                    data.profilePic = profileUrl
                }
                const salt = await bcrypt.genSalt(10)
                data.avatarColor = materialColors[Math.floor(Math.random() * materialColors.length)]
                data.password = await bcrypt.hash(data.password, salt)
                const newUser = new User(data)
                await newUser.save()
                res.send({
                    message: "success",
                    successMsg: 'Miresevjen ne al-Bli!',
                    redirectTo: '/'
                })
            } catch (e) {
                res.send({
                    message: 'error',
                    errorMsg: e.msg
                })
            }
        })
    } catch (e) {
        res.send({
            message: 'error',
            errorMsg: 'Ndodhi nje gabim!'
        })
    }
}

export const config = {
    api: {
        externalResolver: true,
        bodyParser: false
    }
}