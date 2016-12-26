var express = require('express');
let morgan = require('morgan');
var app = express();

app.use(morgan('combined'));

app.get('/api', function (req, res) {
  let data = {
    foo: "bar"
  }

  res.status(200).json(data);
})

module.exports = app;
