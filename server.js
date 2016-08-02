var express = require('express');
//Express - default
var app = express();
var port = 5050;

app.use(express.static('public'));


//Connection
app.listen(port,function(){
  console.log('Node is looping on port ' + port);
});
