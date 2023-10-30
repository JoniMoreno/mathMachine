const Joi = require("joi");
const schema = Joi.object().keys({
    number: Joi.number().positive().integer()
})

module.exports = schema;