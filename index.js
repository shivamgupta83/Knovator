const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
let app = express();
app.use(express.json());
var passport = require('passport');
app.use(passport.initialize());
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.STRING)
  .then(() => {
    console.log('mongoDB is connected');
  })
  .catch((e) => {
    console.log(`mongodb is not connected ERROR ${e}`);
  });

app.use('/', require('./src/routes/route'));

app.listen(process.env.PORT, () => {
  console.log('server is running on port 3000');
});
