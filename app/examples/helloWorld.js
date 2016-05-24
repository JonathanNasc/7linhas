/* inicio - configuracoes hello world */
GLOBAL.APP_PATH = process.cwd() + '/app/' // não adicione o APP_PATH em outras classes pois ela já é setada no server.js como global
/* fim    - configuracoes hello world */

var scraper = require(APP_PATH + 'core/scraper')
// var dbUtils = require(APP_PATH + 'database/dbUtils')
// var mongojs = require('mongojs')
// var db = mongojs(dbUtils.CONNECTION_URL)
// var lines = db.collection('lines')

// var insertLine = function (line) {
//   lines.insert(line, function (err, line) {
//     if (err) console.error(err)
//   })
// }

// var printAll = function () {
//   lines.find().forEach(function(err, line){
//       if(err) console.error(err);
//       console.log(line);
//   })
// }

scraper.test()

