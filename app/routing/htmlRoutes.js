// Dependencies
var path = require('path');

// Routes to HTML files
module.exports = function(app) {
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});
	// Dfeaults to home.html
	app.use('/', function(req, res){
		res.sendFile(path.join(__dirname, '/../public/home.html'))
	});
}
