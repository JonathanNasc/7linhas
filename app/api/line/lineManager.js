var Promise = require('bluebird')
var jscrap = require('jscrap')
var dbUtils = require('app/dbUtils')
var Promise = require('bluebird')
var mongojs = require('mongojs')
var join = require('path').join
var fs = require('fs')

var db = mongojs(dbUtils.CONNECTION_URL)
var newsDb = db.collection('news')
var promotionsDb = db.collection('promotions')

var startRoutineSearch = function () {
  var providers = JSON.parse(fs.readFileSync(join(__dirname, '/providers.json'), 'utf8')) || [];

  providers['news'].forEach(function (page) {
    makeLine(page.url, page.title, page.href)
      .then(function (line) {
        line.date = new Date()
        newsDb.insert(line)
      })
  })

  providers['promotions'].forEach(function (page) {
    makeLine(page.url, page.title, page.href, page.price)
      .then(function (line) {
        line.date = new Date()
        promotionsDb.insert(line)
      })
  })
}

var getNews = function () {
  return new Promise(function (resolve, reject) {
    newsDb.find({}).limit(7).sort({date:-1}).toArray(function (err, news) {
      if (err) reject(err)
      return resolve(news)
    })
  })
}

var getPromotions = function () {
  return new Promise(function (resolve, reject) {
    promotionsDb.find({}).limit(7).sort({date:-1}).toArray(function (err, promotions) {
      if (err) reject(err)
      return resolve(promotions)
    })
  })
}

var testLine = function(url, title, href, price) {
  return makeLine(url, title, href, price)
    .then(function(line){
      console.log('Line tested => ' + JSON.stringify(line))
      return line
    })
}

var makeLine = function (url, titleCssPath, hrefCssPath, priceCssPath) {
  var getText = function($, cssPath) {
    return $(cssPath).attr('title') || $(cssPath).text().trim()
  }

  var putComa = function(text){
    if(text.indexOf(',') > -1) return text
    var position = text.length - 2
    return [text.slice(0, position), ',', text.slice(position)].join('')
  }

  return new Promise(function (resolve, reject) {
    jscrap.scrap(url, function (err, $) {
      if(err) reject(err);
      var line = {}
      line.title = getText($, titleCssPath)
      line.href = $(hrefCssPath).attr('href')
      if(priceCssPath) line.price = putComa(getText($, priceCssPath))
      return resolve(line)
    })
  })
}

module.exports.getNews = getNews
module.exports.getPromotions = getPromotions
module.exports.testLine = testLine
module.exports.startRoutineSearch = startRoutineSearch
