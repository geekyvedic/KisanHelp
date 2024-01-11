const path = require("path");
module.exports.crop = (req,res)=>{
  res.sendFile(path.resolve("public/HTML/crop.html"));
}
