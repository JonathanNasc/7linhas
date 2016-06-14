var express = require('express')
var lineManager = require('app/api/line/lineManager')
var router = new express.Router()

router.get('/wake-up', function (req, res) {
  lineManager.makeLines()
  res.send('AAaahgrhh... Thanks for wake me up.')
})

router.get('/get-lines', function (req, res) {
  lineManager.getLines()
    .then(function(response){
      res.json(response)
    })
})

module.exports = router
