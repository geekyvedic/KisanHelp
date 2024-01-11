require("dotenv").config();
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose")//we r not requiring the passport-local module because we doesnt need it here we installed it only because it is one of the dependencies of passport-local-mongoose
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const userSchema = new mongoose.Schema({
  username:{ type: String, unique: true }, // unique google id  for google auth
  name:String,
  email:String,
  phonenumber:String,
  password:String,
  provider:{type:String,default:"local"}
});
userSchema.plugin(passportLocalMongoose);// it automatically generate the salt and no. of salt rounds and saves the user into the database basically it does most of the heavy lifting
userSchema.plugin(findOrCreate);
const User = new mongoose.model("user", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/community"
  },
  function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
          User.findOrCreate(
            { username: profile.id },
            {
              name:profile.displayName,
              provider: "google",
              email: profile._json.email
            },
            function (err, user) {
                return cb(err, user);
            }
          );
      }
));

module.exports = User;
