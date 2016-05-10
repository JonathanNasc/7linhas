var Promise = require('bluebird');
var scrape  = require('scrape-js');

var makeLine = function (url, titleCssPath, hrefCssPath) {
	//para teste ####################
	url = 'http://g1.globo.com/';
	titleCssPath = '#g1-card-trends > div > div > ul > li:nth-child(1) > a > span';
	hrefCssPath  = '#g1-card-trends > div > div > ul > li:nth-child(1) > a';
	//para teste ####################
	
	return scrapeTitle(url, titleCssPath)
		.then(function (title) {
			return scrapeHref(url, hrefCssPath)
				.then(function(href){
					return {title: title, href: href};
				});
		});
}

var scrapeTitle = function(url, cssPath) {
	return getElement(url, cssPath)
		.then(function (element) {
			return element.children[0].data.trim();
		});
}

var scrapeHref = function(url, cssPath) {
	return getElement(url, cssPath)
		.then(function (element) {
			return element.attribs.href;
		});
}

var getElement = function(url, cssPath){
	scrape(
		url, 
		[cssPath], 
		function (error, elements) {
		    if(error) throw error;
		    return Promise.resolve(elements[0][0]);
		});
}

module.exports.scrapeTitle = scrapeTitle;
module.exports.scrapeHref = scrapeHref;
module.exports.makeLine = makeLine;