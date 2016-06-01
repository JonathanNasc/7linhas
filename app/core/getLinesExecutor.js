var dbUtils = require(APP_PATH + 'database/dbUtils')
var Promise = require('bluebird')
var mongojs = require('mongojs')
var db = mongojs(dbUtils.CONNECTION_URL)
var lines = db.collection('lines')

var getLines = function () {
  return new Promise(function (resolve, reject) {
    lines.find({}).limit(7).toArray(function (err, list) {
      if (err) reject(err)
      return resolve(list)
    })
  })
}

module.exports.action = 'get-lines'
module.exports.execute = getLines
