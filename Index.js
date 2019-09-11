const express = require('express');
const bodyParser = require('body-parser');
// const taiwan = require('./routes/taiwan');
// console.log(taiwan);
//const cors = require('cors');
//const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

//route paths
const route = require('./routes/weather');
//port number
const PORT = process.env.PORT || 5007;
//utilies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(helmet());
//app.use(cors());
app.use(morgan('combined'));

//route lists
//even though it has route path,if it has no requeted data,it won't be work
app.use('/',route);
//
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})