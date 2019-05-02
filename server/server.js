'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Constants
const PORT = 8080;
// const JUPYTER_ADDRESS = process.env.JUPYTER_ADDRESS
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/jupyter', (req, res) => {
  res.end()
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../client/dist/index.html`));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);



// app.use(express.static(`${__dirname}/../react-client/dist`));
//
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
// });
//
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}!`);
// });
