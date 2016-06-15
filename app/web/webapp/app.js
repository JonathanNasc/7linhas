'use strict';
/*global m */

var app = {
  view: function(){
  	return [
      m(header),
      m('div.container'),
      m('div.footer')
  	];
  }
}

//initialize
m.mount(document.getElementById("app"), app);
