const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log('<h1>Middleware test</h1>');
//   next();
// });

app.get('/', (req, res) => {
  res.send('Root test');
});

app.get('/profile', (req, res) => {
  res.send('GET profile');
});

app.post('/profile', (req, res) => {
  console.log(req.body);
  res.send('Added User...');
});

app.listen(port);
