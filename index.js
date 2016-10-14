//bring in the necessary dependencies
var express = require('express');
var bodyParser = require('body-parser');


// Configure the express web server framework
var app = express();
app.use(bodyParser.json());


//define the API routes for our application
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var messages = [
  {
  username: "Richard",
  message: "Hello"
  },
  {
    username: "Rick",
    message: "Hello sire"
  }
];
//messages
//get
//posts

app.get('/messages', function (req, res) {
  res.json(messages);
});

app.post('/messages',  function (req, res) {
  messages.push({
    username:  req.body.username,
    message:  req.body.message
  });
  res.json(messages);
});


//Activate the express server
app.listen(process.env.Port || 3000, function () {
  console.log('Example app listening on port');
});
