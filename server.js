var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('src'));

app.get('/', function (req, res) {
  res.sendfile('/src/index.html', { root: __dirname + '/..' })
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + ' !');
});
