require('dotenv').config();

// start server with express
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// connect to database
const db = require('./models');


app.listen(3001, () => {
  console.log('Server started on port 3001');
});