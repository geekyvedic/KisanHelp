const path = require("path");
module.exports.schemes = (req,res)=>{
  // The path.resolve() method is used to resolve a sequence of path-segments to an absolute path. and sendFile requires an absolute path not relative path for its execution
  res.sendFile(path.resolve("public/HTML/schemes.html"));
}
