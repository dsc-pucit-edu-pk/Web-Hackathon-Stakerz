const express = require('express');
const session = require("express-session");
const cors = require('cors');
// const bcrypt = require('bcrypt');
const app = express();

var bodyParser = require('body-parser');
const router = express.Router();
app.use(cors());
const connection = require('./connection')


app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: false,
  })
);

var fileupload = require("express-fileupload");
app.use(fileupload());


var service = require('./services/service');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(passport.session());

app.use('/service', service);
app.use('/',connection);


app.use('/', router);


const passport = require("passport");
require("./config/passport_setup"); // Assuming this is the path to your passport_setup.js file

// Other middleware and route configurations

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());




module.exports = router;
app.listen(3000, () => {
  console.log('Al-Quran Working on port 3000!');
});