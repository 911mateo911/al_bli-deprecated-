import dbConnection from "../../utils/dbConnection"
import Product from "../../models/Product"

export default async function handler(req, res) {
    try {
        await dbConnection()
        console.log('sadsa')
        const latestPosts = await Product.find({}).sort({
            rating: 1,
            date: 1
        }).limit(10)
        res.send({
            posts: latestPosts
        })
    } catch (e) {
        console.log(e)
        res.send({
            message: 'Ndodhi nje gabim gjate marrjes se te dhenave'
        })
    }
}