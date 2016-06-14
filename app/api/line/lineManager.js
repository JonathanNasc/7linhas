var Promise = require('bluebird')
var jscrap = require('jscrap')
var dbUtils = require('app/dbUtils')
var Promise = require('bluebird')
var mongojs = require('mongojs')
var join = require('path').join
var fs = require('fs')

var db = mongojs(dbUtils.CONNECTION_URL)
var lines = db.collection('lines')

var makeLines = function () {
  var providers = JSON.parse(fs.readFileSync(join(__dirname, '/providers.json'), 'utf8')) || [];

  providers['news'].forEach(function (page) {
    makeLine(page.url, page.title, page.href)
      .then(function (line) {
        line.date = new Date()
        lines.insert(line)
      })
  })
}

var makeLine = function (url, titleCssPath, hrefCssPath) {
  return new Promise(function (resolve, reject) {
    jscrap.scrap(url, function (err, $) {
      if(err) reject(err);
      return resolve({
        title: $(titleCssPath).attr('title') || $(titleCssPath).text().trim(),
        href: $(hrefCssPath).attr('href')
      })
    })
  })
}

var getLines = function () {
  return new Promise(function (resolve, reject) {
    lines.find({}).limit(7).toArray(function (err, list) {
      if (err) reject(err)
      return resolve(list)
    })
  })
}

module.exports.getLines  = getLines
module.exports.makeLines = makeLines
