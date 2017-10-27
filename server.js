// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var bodyParser = require('body-parser');
var fs = require('fs');

var type = upload.single('datafile');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.json());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

console.log('starting logic for app');


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/fileupload", type, function (req, res) {
  
  
  res.send('file size: ' + req.file.size);
  
  // res.send('sent post to /fileupload');
  
  
  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
