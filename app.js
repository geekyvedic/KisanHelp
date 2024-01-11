const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose")//we r not requiring the passport-local module because we doesnt need it here we installed it only because it is one of the dependencies of passport-local-mongoose
const ejs = require("ejs");
const authRoute = require("./routes/authRoute");
const cropRoute = require("./routes/cropRoute");
const googleAuthRoute = require("./routes/googleAuthRoute");
const locationRoute = require("./routes/locationRoute");
const newsRoute = require("./routes/newsRoute");
const schemesRoute = require("./routes/schemesRoute");
const weavyCommunityRoute = require("./routes/weavyCommunityRoute");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(session({
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:true
}));//we are setting up the session
app.use(passport.initialize());//we are initializing the passport module
app.use(passport.session());// making passport to handlle the sessions
mongoose.connect("mongodb://localhost:27017/kisanHelpDB", {useNewUrlParser: true, useUnifiedTopology: true});


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/HTML/index.html");
});

app.use(authRoute);
app.use(cropRoute);
app.use(googleAuthRoute);
app.use(locationRoute);
app.use(newsRoute);
app.use(schemesRoute);
app.use(weavyCommunityRoute);

app.listen(3000,()=>{
  console.log("Server listening on port 3000");
});
