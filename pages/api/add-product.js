import dbConnection from "../../utils/dbConnection"
import Product from "../../models/Product"
import validationSchema from '../../validators/newproductForm.validation'
import CustomError from '../../middlewares/customError'
import extendedData from '../../middlewares/extendProductData'

export default async function handler(req, res) {
  try {
    await dbConnection()
    const { data } = req.body
    const product = validationSchema.validate(data)
    if (product.error) {
      throw new CustomError(product.error.message, 400)
    }
    const newProduct = new Product(extendedData(data))
    await newProduct.save()
    res.send({
      message: "success",
    })
  } catch (e) {
    res.send({
      message: 'error',
      errorMsg: e.msg
    })
  }
}
