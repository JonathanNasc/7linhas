var Promise = require('bluebird')
var jscrap = require('jscrap')

var test = function () {
  // para teste ####################
  url = 'http://www.estadao.com.br/ultimas/'
  titleCssPath = 'body > div.clearfix > div > div.col2-3 > section > ul:nth-child(2) > li > div.listadesc > a > p'
  hrefCssPath = 'body > div.clearfix > div > div.col2-3 > section > ul:nth-child(2) > li > div.listadesc > a'
  // para teste ####################

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
        title: $(titleCssPath).text().trim(),
        href: $(hrefCssPath).attr('href')
      })
    })
  })
}

module.exports.test     = test
module.exports.makeLine = makeLine
