import dbConnection from '../../utils/dbConnection'
import Product from '../../models/Product'
import CustomError from '../../middlewares/customError'
import { getSession } from 'next-auth/client'

export default async function handler(req, res) {
    try {
        await dbConnection()
        const session = await getSession({ req })
        if (!Boolean(session)) {
            throw new CustomError('Ndodhi nje gabim', 400)
        }
        const { productId, accountId } = req.body
        const product = await Product.findById(productId)
        if (product.favouritedBy.indexOf(accountId) !== -1) {
            const filtered = product.favouritedBy.filter(e => e !== accountId)
            product.favouritedBy = filtered
        } else {
            product.favouritedBy.push(accountId)
        }
        await product.save()
        res.send({
            message: 'success'
        })
    } catch (e) {
        res.send({
            message: 'error',
            errorMsg: e.msg
        })
    }
}