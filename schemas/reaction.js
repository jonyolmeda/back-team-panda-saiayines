const joi = require('joi')

const schema = joi.object({
    itineraryId: joi
    .string()
    .required(),
    name: joi
    .string()
    .required()
    .min(2)
    .max(70)
    .messages({
        "any.required": "This field is required.",
        "string.empty": "This field is empty, please, introduce a name.",
        "string.min": "This field is required, please, introduce a name with a minimum of 2 letters.",
        "string.max": "This field is required, please, introduce a name with less than 70 letters."
    }),
    icon: joi
    .string()
    .required()
    .uri()
   ,
    iconBack: joi.
     string()
    .required()
    .uri()
    ,
    userId: joi
    .any()
    .required(),
 })

module.exports = schema