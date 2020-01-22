var express = require("express");
var expobj = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var db = require("./backendconfigurationdb.js");
var port = process.env.PORT || 8080; //creating env and saving port
