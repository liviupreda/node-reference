const express = require('express');
const port = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Root');
});

app.get('/profile', (req, res) => {
  const user = {
    name: 'Liviu',
    hobby: 'Eating'
  };
  res.send(user);
});

app.listen(port);
