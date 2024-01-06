const { default: mongoose } = require('mongoose');
let Post = require('../models/post');
let jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { error } = require('../postValidator');
const user = require('../models/user');

let postCreate = async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ message: false, errors: error['errors'] });
    }
    // console.log('User ID:', req.user.userExist._id);

    let userExist = await user.findById(req.user.userExist._id);
    if (!userExist)
      return res.status(400).send({ message: 'user is not found' });

    let { Title, Body, Created_By, Active, Geo_location } = req.body;

    req.body.Created_By = req.user.userExist._id;
    let createdUser = await Post.create(req.body);

    return res.status(200).send({ message: 'true', Data: createdUser });
  } catch (error) {
    return res.status(500).send(error);
  }
};

let postGet = async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ message: false, errors: error['errors'] });
    }
    let { Geo_location } = req.body;

    let GetPost = await Post.find({ Geo_location, Active: true });

    return res.status(200).send({ message: true, Data: GetPost });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

let GetActive = async (req, res) => {
  try {
    let GetPost = await Post.countDocuments({ Active: true });
    let GetPostInactive = await Post.countDocuments({
      Active: false,
    });

    return res.status(200).send({
      message: 'true',
      Data: {
        Active: GetPost,
        InActive: GetPostInactive,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
let PostUpdate = async (req, res) => {
  try {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send({ message: false, errors: error['errors'] });
    }
    let { post_id } = req.params;
    let UserId = req.user.userExist._id;

    let post = await Post.findOne({ _id: post_id, Active: true }).lean();
    if (post.Created_By.toString() != UserId.toString())
      return res.status(403).send({ message: false, Data: 'unauthorizedUser' });

    if (!post) return res.status(404).send({ message: false, Data: null });

    let { Title, Body, Active, Geo_location } = req.body;

    let UpdatedPost = await Post.findByIdAndUpdate(post_id, req.body, {
      new: true,
    });

    return res.status(200).send({ message: true, Data: UpdatedPost });
  } catch (error) {
    return res.status(500).send(error);
  }
};

let postDelete = async (req, res) => {
  try {
    let { post_id } = req.params;
    let UserId = req.user.userExist._id;

    let post = await Post.findById(post_id).lean();
    if (post.Created_By.toString() != UserId.toString())
      return res.status(403).send({ message: false, Data: 'unauthorizedUser' });

    if (!post) return res.status(404).send({ message: false, Data: null });

    let deletedPost = await Post.findByIdAndDelete(post_id);

    return res
      .status(200)
      .send({ message: 'Post is Deleted', Data: deletedPost });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { postCreate, postGet, PostUpdate, postDelete, GetActive };
