import dbConnection from "../../utils/dbConnection"
import { getSession } from "next-auth/client"
import CustomError from "../../middlewares/customError"
import Product from '../../models/Product'
import extendedData from '../../middlewares/extendProductData'
import formidable from 'formidable'
import { uploadImagesToCloudinary } from './add-product'
import cloudinary from 'cloudinary'
import validationSchema from '../../validators/newproductForm.validation'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export default async function handler(req, res) {
    try {
        await dbConnection()
        const session = await getSession({ req })
        const form = formidable({ multiples: true })
        form.parse(req, async (err, fields, files) => {
            try {
                const data = fields
                data.keywords = fields.keywords.split(',')
                data.toBeDeleted = fields.toBeDeleted.split(',')
                const product = await Product.findById(data.id)
                if (!Boolean(session) || session.user._id !== product.seller.toString()) {
                    throw new CustomError('Ju nuk keni autorizim per kete veprim!', 400)
                }
                if (!product) throw new CustomError('Produkti nuk ekziston', 400)
                delete data.id
                const validateProduct = validationSchema.validate(data)
                if (validateProduct.error) throw new CustomError(validateProduct.error.message, 400)
                if (!data.toBeDeleted.every(e => e === '')) {
                    // if toBeDeleted is not ['']
                    const photosToDelete = product.photos.filter(e => data.toBeDeleted.indexOf(e.url) !== -1)
                    for (let photo of photosToDelete) {
                        await cloudinary.v2.uploader.destroy(photo.filename)
                    }
                    // assign new value of photos to product
                    product.photos = product.photos.filter(e => data.toBeDeleted.indexOf(e.url) === -1)
                }
                if (files.photos) {
                    const maxLength = 10 - product.photos.length
                    // max length of 10 - saved photos
                    const images = [files.photos].flat().slice(0, maxLength)
                    const imageSrcs = await uploadImagesToCloudinary(images)
                    data.photos = imageSrcs.concat(product.photos)
                    // concating new photos with old ones
                }
                
                console.log(extendedData(data))
                // search the photos to be deleted here and try to upload provided photos
                // check for vulnerabilities
            } catch (e) {
                console.log(e)
            }
        })
    } catch (e) {
        console.log(e)
        res.send({
            message: 'error',
            errorMsg: e.msg
        })
    }
}

export const config = {
    api: {
        externalResolver: true,
        bodyParser: false
    }
}