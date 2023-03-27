const cron = require('node-cron');
const searchForUrl = require('./searchForUrl');

cron.schedule('*/5 * * * * *', searchForUrl);

module.exports = { cron };