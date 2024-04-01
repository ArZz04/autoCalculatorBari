const Joi = require('joi');

// Esquema de validación para los datos del usuario
const userSchema = Joi.object({
    id: Joi.number().integer().min(1).required(),
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    antiguedad: Joi.number().integer().required(),
    rol: Joi.string().required()
});

module.exports = userSchema;