const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req.query);
  res.send('GET Route');
});

app.listen(port);
