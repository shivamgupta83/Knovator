const { body, validationResult } = require('express-validator');
const createPostValidator = [
  body('Title').trim().isString().notEmpty(),
  body('Body').trim().isString().notEmpty(),
  body('Active').isBoolean(),
  body('Geo_location.latitude').isNumeric().notEmpty(),
  body('Geo_location.longitude').isNumeric().notEmpty(),
];

const getPostValidator = [
  body('Geo_location.latitude').isNumeric().notEmpty(),
  body('Geo_location.longitude').isNumeric().notEmpty(),
];

const updatePostValidator = [
  body('Title').trim().isString().optional(),
  body('Body').trim().isString().optional(),
  body('Active').isBoolean().optional(),
  body('Geo_location.latitude').isNumeric().optional(),
  body('Geo_location.longitude').isNumeric().optional(),
];
const userLoginValidator = [
  body('Email').trim().isString().notEmpty(),
  body('Password').isNumeric().notEmpty(),
];

const userResisterValidator = [
  body('Name').trim().isString().notEmpty(),
  body('Email').trim().isString().notEmpty(),
  body('Password').isNumeric().notEmpty(),
];

const error = (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      console.log('s');
      return res.status(400).send({ message: false, errors: error['errors'] });
    }
  } catch (e) {
    return res.status(500).send({ message: false, errors: e.message });
  }
};
const errors = (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      console.log('s');
      return res.status(400).send({ message: false, errors: error['errors'] });
    }
  } catch (e) {
    return res.status(500).send({ message: false, errors: e.message });
  }
};

module.exports = {
  createPostValidator,
  updatePostValidator,
  getPostValidator,
  userLoginValidator,
  userResisterValidator,
  error,
  errors,
};
