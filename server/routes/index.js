const router = require('express').Router()

router.use('/api', require('./Post.js'))
router.use('/api', require('./User.js'))

module.exports = router