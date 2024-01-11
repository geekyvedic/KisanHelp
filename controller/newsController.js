require("dotenv").config();
const axios = require('axios').default;
module.exports.news = (req,res)=>{
  let date = new Date();
  const year = String(date.getFullYear());
  const month = "0"+String((date.getMonth()+1));
  console.log(month);
  const todaydate = String(date.getDate());
  axios.get("https://newsapi.org/v2/everything?q=farming&language=en&from="+year+"-"+month+"-"+todaydate+"&sortBy=relevancy&apiKey="+process.env.API_KEY_NEWS)
  .then(function(response) {
    console.log(response);
    news = response.data;
    res.render("news",{news:news});
  }).catch(function(error) {
    console.log(error);
  });
}
