// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Setups Express
var app = express();
var PORT = process.env.PORT || 5000;

// Express handles data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Server is listening
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
  });
  