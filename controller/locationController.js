require("dotenv").config();
const axios = require('axios').default;
let soil,lat,long,pollen,air,weather,weathericonurl,news;
module.exports.location =  (req,res)=>{
  console.log(req.params.long);
   lat = req.params.lat;
   long=req.params.long;
  function loc() {
  var options1 = {
    method: 'GET',
    url: 'https://api.ambeedata.com/latest/by-lat-lng',
    params: {lat: lat, lng: long},
    headers: {'x-api-key': process.env.API_KEY_AMBEE, 'Content-type': 'application/json'}
  };
  var options2 = {
  method: 'GET',
  url: 'https://api.ambeedata.com/soil/latest/by-lat-lng',
  params: {lat: lat, lng: long},
  headers: {'x-api-key': process.env.API_KEY_AMBEE, 'Content-type': 'application/json'} };
  var options3 = {
  method: 'GET',
  url: 'https://api.ambeedata.com/latest/pollen/by-lat-lng',
  params: {lat: lat, lng: long},
  headers: {'x-api-key': process.env.API_KEY_AMBEE, 'Content-type': 'application/json'}
  };

  axios.request(options1).then(function (response) {
   console.log(response.data);
   air = response.data;
   return axios.request(options2)
  })
  .catch(function (error) {
   console.error(error);
   reject(error);
  })

.then(function (response) {
	console.log(response.data);
  soil = response.data;
  return axios.request(options3)

}).catch(function (error) {
	console.error(error);
  reject(error);
})
.then(function (response) {
console.log(response.data);
pollen = response.data;
const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&appid="+process.env.API_KEY_WEATHER;
return axios.get(url)
}).catch(function (error) {
console.error(error);
reject(error);
})
.then(function(response) {
  console.log(response);
  weather = response.data;
  weathericonurl = "http://openweathermap.org/img/wn/"+ weather.weather[0].icon+"@2x.png";
  res.redirect("/location");
});
}
loc();
}
module.exports.location_redirect = (req,res)=>{
    res.render("location",{lat:lat,long:long,soil:soil,air:air,pollen:pollen,weather:weather,weathericonurl:weathericonurl});
}
