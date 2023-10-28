const Joi = require("joi");

const isPrimeSchema = Joi.object.keys({
    number: Joi.number.required()
});

module.exports = isPrimeSchema;