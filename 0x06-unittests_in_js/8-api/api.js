// module contains a server that uses the express api to create one
// contains the route / for a get request
const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
