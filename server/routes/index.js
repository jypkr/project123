const router = require('express').Router()

router.use('/api', require('./Users.js'))

module.exports = router