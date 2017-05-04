'use strict';

const port = process.env.PORT || 3000;

const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.sendFile('index.html', { root: __dirname });
});

app.use(express.static(__dirname));

app.listen( port, () => {
  console.log('listening');
});