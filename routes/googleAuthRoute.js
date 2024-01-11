const {Router} = require("express");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose")
const router = Router();
router.get("/auth/google", passport.authenticate('google', {
      scope: ['profile', 'email']
  }));
router.get("/auth/google/community", passport.authenticate('google', { failureRedirect: '/signin-signup' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/weavyCommunity");
    })
module.exports = router;
