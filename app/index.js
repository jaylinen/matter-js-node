var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  let data = {
    foo: "bar"
  }

  res.status(200).json(data);
})

module.exports = app;
