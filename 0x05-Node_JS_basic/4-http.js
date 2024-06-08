// creates an http server in node in the file node.js
// and listens on port 1245

const http = require('http');
const port = 1245;

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log('server running');
});

module.exports = app;
