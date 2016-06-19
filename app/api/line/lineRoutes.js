var express = require('express')
var lineManager = require('app/api/line/lineManager')
var router = new express.Router()

router.get('/wake-up', function (req, res) {
  lineManager.startRoutineSearch()
  res.send('AAaahgrhh... Thanks for wake me up.')
})

router.get('/get-news', function (req, res) {
  lineManager.getNews()
    .then(function(response){
      res.json(response)
    })
})

router.get('/get-promotions', function (req, res) {
  lineManager.getPromotions()
    .then(function(response){
      res.json(response)
    })
})

router.get('/test-line', function (req, res) {
  var t = {
    "url"  : "http://www.extra.com.br/promocao-do-dia/oferta-extraordinaria.aspx",
    "title": "div.hproduct a.link.url",
    "href" : "div.hproduct a.link.url",
    "price": "div.hproduct .productDetails .sale strong"
  }

  lineManager.testLine(t.url, t.title, t.href, t.price)
    .then(function(response){
      res.json(response)
    })
})

module.exports = router
