require('dotenv').config()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose
     .connect( process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

require('./api/models/playersModel'),
require('./api/models/usersModel'),


app.use(express.static(__dirname + '/frontend'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('FootBet RESTful API server started on: ' + port);