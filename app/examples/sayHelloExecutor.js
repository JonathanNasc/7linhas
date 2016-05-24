var scraper = require(APP_PATH + 'core/scraper')
module.exports.action = 'say-hello'
module.exports.execute = function () {
  return scraper.test()
    .then(function (line) {
      return line
    })
}
