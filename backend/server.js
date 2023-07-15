const express = require('express');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('api is running');
});

app.listen(PORT, console.log(`server started at ${PORT}`));
