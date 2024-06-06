// module contains a server that uses the express api to create one
// contains the route / for a get request
const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET ${req.originalUrl}</pre>
</body>
</html>
`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
