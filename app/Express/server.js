var express = require("express"),
	http = require("http"),
	redis = require("redis"),
	MongoClient = require('mongodb').MongoClient,
	app = express(),
	server = http.createServer(app),
	socketIO = require('socket.io'),
	io = socketIO(server),
	myJson = '{}';

app.use(express.static(__dirname + "/client"));

server.listen(3000);

app.get("/results.json", function (req, res) {
	res.json(myJson);
});






function processURL() {
	

	

};
