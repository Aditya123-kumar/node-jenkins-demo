var express = require('express');
var app = express();

var version = process.env.VERSION || 'LOCAL';

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World", "version": "' + version + '" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": "It works!", "version": "' + version + '" }');
});

app.listen(process.env.PORT || 3000);

module.exports = app;