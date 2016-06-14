var express = require('express')
var lineRoutes = require('./api/line/lineRoutes')
var join = require('path').join

var router = new express.Router()

router.use('/', express.static(join(__dirname, 'web')))
router.use('/api', lineRoutes)

module.exports = router
