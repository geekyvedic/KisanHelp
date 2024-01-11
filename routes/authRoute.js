const {Router} = require("express");
const router = Router();
const authController = require("../controller/authController");
router.post("/signup", authController.signup_post);
router.post("/signin", authController.signin_post);
router.get("/signin-signup", authController.signin_signup_get);
module.exports = router;
