import dbConnection from "../../utils/dbConnection"
import { getSession } from "next-auth/client"
import CustomError from "../../middlewares/customError"
import Product from '../../models/Product'
import formidable from 'formidable'
import validationSchema from '../../validators/newproductForm.validation'

export default async function handler(req, res) {
    try {
        await dbConnection()
        const session = await getSession({ req })
        const form = formidable({ multiples: true })
        form.parse(req, async (err, fields, files) => {
            try {
                const data = fields
                const product = await Product.findById(data.id)
                console.log(session.user._id, product.seller.toString())
                if (!Boolean(session) || session.user._id !== product.seller.toString()) {
                    throw new CustomError('Ju nuk keni autorizim per kete veprim!', 400)
                }
                if (!product) throw new CustomError('Produkti nuk ekziston', 400)
                delete product.id
                // search the photos to be deleted here and try to upload provided photos
                // check for vulnerabilities
            } catch (e) {

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