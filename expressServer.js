const express = require('express');
const port = 8080;

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log('<h1>Middleware test</h1>');
  next();
});

app.get('/', (req, res) => {
  res.send('Root test');
});

app.get('/profile', (req, res) => {
  const user = {
    name: 'Liviu',
    hobby: 'Eating'
  };
  res.send(user);
});

app.listen(port);
