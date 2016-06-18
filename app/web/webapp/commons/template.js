import { Header } from 'webapp/header/header.js'

template = function(tab, content){
  return [
    m(Header, tab),
    m('div#content', content),
    m('div#footer',m('a', {onclick : function(){m.route('/presentation')}}, 'Sobre o 7linhas.com'))
  ]
}

export var template
