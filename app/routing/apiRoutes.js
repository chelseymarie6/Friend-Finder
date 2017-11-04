// loads data - friends.js file
var friendData = require('../data/friends.js')
var path = require('path');

// Routes to api/friends
var api = function(app) {
	this.get = function() { 
	    app.get('/api/friends', function(req,res){
		    res.json(friendData);
	    })
    };
	app.post('api/friends', function(req,res){
		console.log(req.body);
	})
};

module.exports = api;