const Joi = require("@hapi/joi");

const ObjectId = {
  isValid: (value) => true,
};

const withObjectId = {
  type: "objectId",
  base: Joi.array()
    .items(Joi.valid(...["reading", "joggin"]))
    .required(),
  messages: {
    "objectId.base":
      "{{#label}} needs to be a string of 12 bytes or a string of 24 hex characters",
  },
  coerce: {
    from: "string",
    method(value, helpers) {
      if (!value) return undefined;
      if (ObjectId.isValid(value)) {
        return { value };
      }
      return { value, errors: helpers.error("objectId.base") };
    },
  },
};

Joi.extend(withObjectId);

const mySchema = Joi.object()
  .keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    middleName: Joi.string().required(),
    objectId: Joi.objectId(),
    access_token: [Joi.string(), Joi.number()],
  })
  .options({ stripUnknown: true })
  .label("Error while validateing {XYZ}");

const kc = {
  firstName: "kingsley",
  lastName: "eneja",
  middleName: "chinonso",
  objectId: "none",
  unknownField: "will be stripped and ignored",
};

const result = mySchema.validate(kc);
console.log(result);
