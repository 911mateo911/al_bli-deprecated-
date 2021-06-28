import dbConnection from "../../utils/dbConnection"
import Product from "../../models/Product"
import formidable from "formidable"
import validationSchema from '../../validators/newproductForm.validation'
import CustomError from '../../middlewares/customError'
import extendedData from '../../middlewares/extendProductData'
import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

const uploadImagesToCloudinary = async files => {
  const promises = files.map(img => new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(img.path,
      {
        folder: 'alBli',
        transformation: [{
          width: 3840,
          height: 2160,
          crop: "pad",
          background: 'auto'
        }]
      }, (err, res) => {
        if (err) reject({ message: 'error' })
        else resolve({
          url: res.secure_url,
          filename: res.public_id
        })
      })
  }))

  return Promise.all(promises).then(result => { return result }).catch(e => { return [] })
}

export default async function handler(req, res) {
  try {
    await dbConnection()
    const form = formidable({ multiples: true })
    form.parse(req, async (err, fields, files) => {
      const data = fields
      data.keywords = fields.keywords.split(',')
      const product = validationSchema.validate(data)
      if (product.error) {
        throw new CustomError(product.error.message, 400)
      }
      if (files.photos) {
        const images = [files.photos].flat().slice(0, 10)
        const imageSrcs = await uploadImagesToCloudinary(images)
        data.photos = imageSrcs
      }
      const newProduct = new Product(extendedData(data))
      await newProduct.save()
      res.send({
        message: "success",
        redirectTo: `${newProduct._id}/${newProduct.slug}`
      })
    })
  } catch (e) {
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