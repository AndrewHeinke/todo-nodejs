const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('link-to-db', (err, database) => {

});

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log('Listening on 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/names', (req, res) => {
  console.log(req.body);
});
