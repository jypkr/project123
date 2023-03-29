// config/index.js
// dotenv module allow to load environment var(key-value pair that is stored in the operating system's environment)
const dotenv = require("dotenv");

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// load environment var from .env
// config() is aync but not using await bc not need to wait until it is complete before continuning 
const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  /**
  
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * MongoDB URI
   */
  mongoURI: process.env.MONGODB_URI,
};