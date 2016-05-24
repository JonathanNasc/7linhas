var scraper = require('../core/scraper')
var fs = require('fs')
var scraper = require(APP_PATH + 'core/scraper')
var dbUtils = require(APP_PATH + 'database/dbUtils')
var mongojs = require('mongojs')
var db = mongojs(dbUtils.CONNECTION_URL)
var lines = db.collection('lines')

var execute = function () {
  var providers = JSON.parse(fs.readFileSync(APP_PATH + 'database/providers.json', 'utf8')) || [];

  providers['news'].forEach(function (page) {
    scraper.makeLine(page.url, page.title, page.href)
      .then(function (line) {
        line.date = new Date()
        lines.insert(line)
      })
  })

  return 'AAaaaghhhr... Thank you for wake me up.'
}

module.exports.action = 'wake-up'
module.exports.execute = execute
