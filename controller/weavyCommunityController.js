const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports.community = (req,res)=>{
  if(req.isAuthenticated()){
    console.log(req.user);
    key = process.env.WEAVY_KEY;
    payload = {
        "sub": req.user._id,
        "name": req.user.username,
        "email": req.user.email,
        "exp": 2516239022,
        "iss": process.env.WEAVY_ID,
    }
    const token = jwt.sign(payload,key);
    res.render("WeavyCommunity",{token:token});
  }
  else{
    res.redirect("/signin-signup");
  }
}
