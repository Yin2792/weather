const express = require('express');
const route = express.Router();
//apiurl
let url    = 'http://api.openweathermap.org/data/2.5/weather?q='
let appId  = 'appid=9459387f0d1a3d97487f3296a5798ad9';
let units  = '&units=metric'; 
var request = require('request');

route.get('/',(req,res)=>{
    res.send({
        body:'',
        forecast:''
    })
})
route.post('/weather/myanmar/mandalay',(req,res,next)=>{
    let city = req.body.city
    url = url+city+"&"+appId;
    request(url,(error, response, body)=> {
        body = JSON.parse(body);
        //console.log(body.weather[0].main);
        if(error && response.statusCode != 200){
          throw error;
        }
      let country = (body.sys.country) ? body.sys.country : '';
      var weather = {
          country:country,
          city:city,
          temperature:body.main.temp,
          humidity:body.main.humidity,
          wind:body.wind,
          long:body.coord.lon,
          lat:body.coord.lat
          
      }
      let forecast = "For city "+city+', country '+country;
      res.send({body : weather, forecast: forecast});
     });
  
})
module.exports = route;