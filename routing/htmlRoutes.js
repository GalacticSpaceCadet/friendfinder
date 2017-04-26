// start with needed npm dependencies
var path = require("path");

//Now we set up routing

module.exports = function(app) {
	//Set up HTML get request and show user data on window
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};