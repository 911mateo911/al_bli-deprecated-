import dbConnection from "../../utils/dbConnection"
import Product from "../../models/Product"
import { getSession } from "next-auth/client"
import formidable from "formidable"
import sharp from 'sharp'
import validationSchema from '../../validators/newproductForm.validation'
import CustomError from '../../middlewares/customError'
import extendedData from '../../middlewares/extendProductData'
import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

export const uploadImagesToCloudinary = async files => {
  const promises = files.map(img => new Promise(async (resolve, reject) => {
    let image = ''
    await sharp(img.path).resize({
      fit: sharp.fit.contain,
      height: 400
    }).withMetadata().toBuffer().then(img => {
      const base64 = img.toString('base64')
      image = `data:image/jpeg;base64,${base64}`
    })
    const uploadStream = cloudinary.v2.uploader.upload(
      image,
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
    const session = await getSession({ req })
    if (!Boolean(session)) {
      throw new CustomError('Ndodhi nje gabim', 400)
    }
    const form = formidable({ multiples: true })
    form.parse(req, async (err, fields, files) => {
      try {
        const data = fields
        data.keywords = fields.keywords.split(',')
        const product = validationSchema.validate(data)
        if (product.error) {
          throw new CustomError('Ndodhi nje gabim', 400)
        }
        data.favouritedBy = []
        data.seller = session.user._id
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