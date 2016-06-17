import { Header } from './header/header.js'
import { News } from './news/news.js'

var App = {
  controller: function(){
    this.page = m.prop('news')
    this.content = {
      'news': m(News),
      'promotion': m('div','promotion'),
      'menu': m('div','menu')
    }
  },
  view: function(ctrl){
  	return [
      m(Header, ctrl.page),
      ctrl.content[ctrl.page()],
      m('div#footer')
  	];
  }
}

//initialize
m.mount(document.getElementById("app"), App)
