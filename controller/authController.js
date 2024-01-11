const User = require("../models/user");
const path = require("path");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose")
module.exports.signup_post = (req,res)=>{
User.register({username:req.body.username,email:req.body.email,phonenumber:req.body.number}, req.body.password, function(err, user) {
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      passport.authenticate("local")(req,res,function () {
        res.redirect("/weavyCommunity");
      });
    }
}
);
}
module.exports.signin_post = (req,res)=>{
  const user = new User({
    username:req.body.username,
    password:req.body.password
  });
  req.login(user,function (err) {
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req,res,function() {
      res.redirect("/weavyCommunity");
      })
    }

  });

}
module.exports.signin_signup_get = (req,res)=>{
  res.sendFile(path.resolve("public/HTML/signin-signup.html"));
}
