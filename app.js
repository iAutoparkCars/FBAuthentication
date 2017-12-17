var express = require('express');
var app = express();
var http = require('http');

var cors = require('cors');
var port = process.env.PORT || 3000;

// path for index.html
var path = require('path');

    // load the index.html page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
app.use(cors());


app.use(function(req, res, next) {
    res.status(404);
    res.end('404: Resouces Not Found');
});
