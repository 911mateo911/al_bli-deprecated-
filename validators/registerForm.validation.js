import Joi from 'joi'

const schema = Joi.object({
    telephone: Joi.string().min(0).max(20).required().pattern(/^(?:[+\d].*\d|\d)$/),
    name: Joi.string().min(0).max(50).required().pattern(/^[a-z '-]+$/i),
    email: Joi.string().required().max(50).pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/),
    profilePic: Joi.array().optional().max(1),
    password: Joi.string().min(0).max(50).required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/)
}).required()

export default schema