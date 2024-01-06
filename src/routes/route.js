const {
  postCreate,
  postGet,
  PostUpdate,
  postDelete,
  GetActive,
} = require('../controllers/post');
const { createUser, login } = require('../controllers/user');
const passport = require('passport');
require('../passport')(passport);
let router = require('express').Router();

const {
  createPostValidator,
  updatePostValidator,
  getPostValidator,
  userLoginValidator,
  userResisterValidator,
} = require('../postValidator');

// User Routes
router.post('/registration', userResisterValidator, createUser);
router.post('/login', userLoginValidator, login);

//post routes
router.post(
  '/createPost',
  passport.authenticate('jwt', { session: false }),
  createPostValidator,
  postCreate
);

//get Post
router.get('/getPost', getPostValidator, postGet);
// get All Active Post
router.get('/getActivePosts', GetActive);
//update Post
router.put(
  '/updatePost/:post_id',
  passport.authenticate('jwt', { session: false }),
  updatePostValidator,
  PostUpdate
);

//delete Post
router.delete(
  '/deletePost/:post_id',
  passport.authenticate('jwt', { session: false }),
  postDelete
);

module.exports = router;
