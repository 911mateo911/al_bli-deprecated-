import mongoose from 'mongoose'

export function formattedDate(dt) {
    const [month, day, year] = [dt.getMonth(), dt.getDate(), dt.getFullYear()]
    let formattedMonth = month
    if (month < 10) formattedMonth = `0${month}`
    return `${formattedMonth}/${day}/${year}`
}

const ProductSchema = new mongoose.Schema({
    name: String,
    date: {
        type: Date
    },
    postDate: {
        type: String,
        default: formattedDate(new Date())
    },
    rating: {
        type: Number,
        default: 1
    },
    telephone: Number,
    email: String,
    whatsapp: Number,
    city: String,
    category: String,
    title: String,
    description: String,
    price: Number,
    currency: String,
    keywords: [{
        type: String,
        default: 'Shitet'
    }],
    slug: String
}, { strict: false })

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)