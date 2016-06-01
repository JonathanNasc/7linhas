var Promise = require('bluebird')
var jscrap = require('jscrap')

var test = function () {
  url = 'http://www.bbc.com/portuguese'
  titleCssPath = '#comp-most-popular > div > div > ul > li:nth-child(1) > a'
  hrefCssPath = '#comp-most-popular > div > div > ul > li:nth-child(1) > a > span.most-popular-list-item__headline'

  return makeLine(url, titleCssPath, hrefCssPath)
    .then(function(line){
      console.log(line)
      return line
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

module.exports.test     = test
module.exports.makeLine = makeLine
