import dbConnection from '../../utils/dbConnection'
import Product from '../../models/Product'
import { getSession } from 'next-auth/client'
import CustomError from '../../middlewares/customError'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export default async function handler(req, res) {
    try {
        await dbConnection()
        const { id } = req.body
        const session = await getSession({ req })
        const foundProduct = await Product.findById(id)
        if (!foundProduct) throw new CustomError('Produkti nuk ekziston!', 400)
        if (!Boolean(session) || session.user._id !== foundProduct.seller.toString()) {
            throw new CustomError('Ju nuk keni autorizim per kete veprim!')
        }
        if (foundProduct.photos.length) {
            for (let photo of foundProduct.photos) {
                await cloudinary.v2.uploader.destroy(photo.filename)
            }
        }
        await Product.findOneAndDelete({ _id: id })
        res.send({
            message: 'success'
        })
    } catch (e) {
        console.log(e)
        res.send({
            message: 'error',
            errorMsg: 'Ndodhi nje gabim.'
        })
    }
}