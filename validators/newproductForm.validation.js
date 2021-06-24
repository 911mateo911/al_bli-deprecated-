import Joi from 'joi'

const schema = Joi.object({
    telephone: Joi.string().min(0).max(20).required().pattern(/^(?:[+\d].*\d|\d)$/),
    name: Joi.string().min(0).max(50).required().pattern(/^[a-z '-]+$/i),
    email: Joi.string().required().max(50).pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/),
    whatsapp: Joi.string().min(0).max(20).required().pattern(/^(?:[+\d].*\d|\d)$/),
    city: Joi.string().required(),
    date: Joi.string().optional,
    category: Joi.string().required(),
    title: Joi.string().min(1).max(200).required().pattern(/^[\S\s]{1,200}$/),
    description: Joi.string().min(1).max(8000).required().pattern(/^[\S\s]{1,8000}$/),
    price: Joi.string().min(1).max(15).required().pattern(/^\d{0,15}$/),
    currency: Joi.string().valid('€', 'Lek', '$'),
    keywords: Joi.array().required().max(5),
    siperfaqe: Joi.string().optional().max(10),
    nrDhoma: Joi.string().optional().max(2),
    adresa: Joi.string().optional().max(70),
    kate: Joi.string().optional().max(2),
    marka: Joi.string().optional().max(50),
    modeli: Joi.string().optional().max(50),
    viti: Joi.string().optional(),
    kilometra: Joi.string().optional().max(50),
    karburanti: Joi.string().optional().max(30),
    transmisioni: Joi.string().optional().max(30),
    prodhuesi: Joi.string().optional().max(50),
    subAnije: Joi.string().optional(),
    subPjeseKembimi: Joi.string().optional(),
    subMakinaBujqesore: Joi.string().optional(),
    subDekorime: Joi.string().optional(),
    photos: Joi.array().optional().max(10)
}).required()

export default schema