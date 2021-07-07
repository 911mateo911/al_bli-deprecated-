import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date
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
    sluggedKeywords: String,
    slug: String,
    elasticSearch: [{
        type: String
    }],
    siperfaqe: String,
    nrDhoma: String,
    adresa: String,
    marka: String,
    modeli: String,
    viti: String,
    karburanti: String,
    kilometra: String,
    transmisioni: String,
    prodhuesi: String,
    subAnije: String,
    subPjeseKembimi: String,
    subMakinaBujqesore: String,
    subDekorime: String,
    photos: [{
        _id: false,
        url: String,
        filename: String
    }]
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)