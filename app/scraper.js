var scrape = require('scrape-js');

var scrapeTitle = function(url, cssPath, callback) {

	//para teste
	url = 'http://g1.globo.com/';
	cssPath = '#g1-card-trends > div > div > ul > li:nth-child(1) > a > span';

	scrape(
		url, 
		[cssPath], 
		function (error, elements) {
		    if(error) throw error;
		    elements.forEach(function (element) {
		        var obj = element[0];
		        var title = obj.children[0].data.trim();
		        callback(title);
		    });
		});
}

var scrapeHref = function(args) {
   return "não implementado ainda";
}

module.exports.scrapeTitle = scrapeTitle;
module.exports.scrapeHref = scrapeHref;