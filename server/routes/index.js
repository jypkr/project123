const router = require('express').Router()

router.use('/api', require('./User.js'))

module.exports = router