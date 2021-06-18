import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now
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
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)