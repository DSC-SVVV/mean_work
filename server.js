//require
var express = require("express");
var expobj = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var db = require("./backendconfiguration/db.js");
var port = process.env.PORT || 8080; //creating env and saving port

//parse application/json

expobj.use(bodyParser.json());
expobj.use(bodyParser.json({ type: "application/vnd.api+json" }));
expobj.use(bodyParser.urlencoded({ extended: true }));
expobj.use(methodOverride("X-HTTP-Method-Override"));
expobj.use(express.static(__dirname + "/public"));

//routes
require("./backendapp/routes")(expobj); //configure our routes

expobj.listen(port);

console.log("node server started on port " + port);
exports = module.exports = expobj;

//connect to our mongoDB database
mongoose
  .connect(db.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(console.log("DB Connected"))
  .catch(err => console.log("DB Connection Error: ${err.message}"));

mongoose.connection.on("disconnected", function() {
  console.log("Disconnected from Databse mongoDB");
});

process.on("SIGINT", function() {
  console.log("Disconnected from MongoDB through app termination");
  process.exit(0);
});
