const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const connectDB = require("./loaders/db");
const db = require('./models');
const routes = require('./routes')
require('dotenv').config();

connectDB(); // connect to the database.

//parses the request body and converts it to an object with key-value pairs
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

// Router
app.use(routes);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
}).on("error", (err) => {
    console.error(err);
    process.exit(1);
});

// Run Cronjob
require('./utils/cronjob.jsx');

