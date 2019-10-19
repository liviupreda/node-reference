const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  // console.log('headers', req.headers);
  console.log('method', req.method);
  console.log('url', req.url);
  const user = {
    name: 'Liviu',
    hobby: 'Eating'
  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(user));
});

server.listen(port);
