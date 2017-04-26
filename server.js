//set up the npm packages
var express = require("express");
var bodyParser = require("body-parser");
//var path = require("path");


//tell node we are creating an express server
var app = express();

//set the port

var PORT = process.env.PORT || 3000;

// Now we set up bodyparser so the server can read and interpret the data sent to it from window.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routing is being used so we can send the data the correct files using route as map.

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Now we add the listner so we can start the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
