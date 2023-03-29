const mongoose = require("mongoose");
const config = require("../config");

const connectDB = async () => {
    try {
        console.log(config.mongoURI)
        await mongoose.connect("mongodb+srv://wooyul1316:1234@cluster0.vbthnsw.mongodb.net/?retryWrites=true&w=majority");
        mongoose.set('autoCreate', true);
        console.log("Mongoose Connected");
    } catch (err) {
        console.error(err.message);
        // terminates the current Node.js process and exits with a non-zero status code
        process.exit(1);
    }
}

module.exports = connectDB;