const cron = require('node-cron');
const { checkForNewPosts } = require('./checkForNewPosts.jsx');

cron.schedule('*/5 * * * * *', checkForNewPosts);

module.exports = { cron };