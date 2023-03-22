require('dotenv').config();

// start server with express
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// connect to database
const db = require(`./models`);

// Routers
const userRouter = require(`./routes/Users`);
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`Server is running on port ${process.env.PORT || 3001}`);
    });
});
