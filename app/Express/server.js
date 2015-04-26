var express = require("express"),
	http = require("http"),
	redis = require("redis"),
	MongoClient = require('mongodb').MongoClient,
	app = express(),
	outcome = "",
	newUrl,
	link,
	genUrl,
	redirect,
	testUrl,
	view,
	data,
	found = 0,
	myJson = '{}';

app.use(express.static(__dirname + "/client"));

http.createServer(app).listen(3000);

app.get("/results.json", function (req, res) {
	res.json(myJson);
});






function processURL() {
	

	

};
