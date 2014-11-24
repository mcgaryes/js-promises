var express = require('express')
var app = express()

app.use(express.static(__dirname + '/app'));

var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('app running at port 5000');

})