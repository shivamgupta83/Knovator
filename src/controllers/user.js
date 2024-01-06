const { default: mongoose } = require('mongoose');
let User = require('../models/user');
let jwt = require('jsonwebtoken');
const { error, errors } = require('../postValidator');
const { body, validationResult } = require('express-validator');

let createUser = async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ message: false, errors: error['errors'] });
    }
    let { name, email, password } = req.body;

    let createdUser = await User.create(req.body);

    return res.status(200).send({ message: 'true', Data: createdUser });
  } catch (error) {
    return res.status(500).send(error);
  }
};

let login = async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ message: false, errors: error['errors'] });
    }
    let { Password, Email } = req.body;
    let userExist = await User.findOne({ Password, Email });
    if (!userExist) return res.status(400).send('user is not found');
    else {
      let token = await jwt.sign({ userExist }, 'key');
      return res.status(200).send({ token, message: 'login' });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { createUser, login };
