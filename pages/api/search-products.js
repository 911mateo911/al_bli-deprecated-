import dbConnection from '../../utils/dbConnection'
import Product from '../../models/Product'
import CustomError from '../../middlewares/customError'
import { getElasticSearch } from '../../middlewares/extendProductData'

function getConfig(body) {
    const config = {}
    Object.keys(body).forEach(e => {
        if (body[e] !== 'all') {
            config[e] = body[e]
        }
    })
    return config
}

function escapeQueryOperators(str) {
    const string = str
        .replace(/{/g, '')
        .replace(/}/g, '')
        .replace(/:/g, '')
    return string.split('').filter(e => e !== '$').join('')
}

export default async function handler(req, res) {
    try {
        await dbConnection()
        const { query, page, city, category } = req.body
        const config = getConfig({ category, city })
        const product = await Product
            .find({
                $or: [
                    { title: { $regex: escapeQueryOperators(query), $options: 'i' } },
                    { sluggedKeywords: { $regex: escapeQueryOperators(query), $options: 'i' } },
                    { elasticSearch: { $in: getElasticSearch(escapeQueryOperators(query)) } }
                ],
                ...config
            })
            .limit(10).skip(page * 10).sort({
                rating: -1,
                date: -1
            })
            .populate('seller', { profilePic: 1 })
        if (!product) {
            throw new CustomError('Nuk u gjet asnje rezultat!', 404)
        }
        res.send({
            products: product
        })
    } catch (e) {
        res.send({
            products: []
        })
    }
}