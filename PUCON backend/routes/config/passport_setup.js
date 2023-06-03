// const express = require("express");
// const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// const app = express();

// Configure express-session middleware


// Import and configure the User model
// const User = require("../models/User");
 
// Configure the "local" strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // Assuming the email field is used for authentication
      passwordField: "password", // Assuming the password field is used for authentication
    },
    function (email, password, done) {
      // Find the user based on the email
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        // Validate the password
        if (!user.validatePassword(password)) {
          return done(null, false, { message: "Incorrect password" });
        }
        // Authentication successful
        return done(null, user);
      });
    }
  )
);

// Serialize the user for the session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Deserialize the user from the session
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;