import Joi from 'joi'

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    redirect: Joi.string().required(),
    csrfToken: Joi.string().required(),
    callbackUrl: Joi.string().required(),
    json: Joi.string().required()
}).required()

export default schema