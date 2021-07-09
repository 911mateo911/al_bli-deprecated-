import dbConnection from '../../utils/dbConnection'
import Product from '../../models/Product'

export default async function handler(req, res) {
    try {
        await dbConnection()
        const { productId, accountId } = req.body
        const product = Product.findById(productId)
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