import { template } from 'webapp/commons/template.js'

Presentation = {}

Presentation.view = function () {
	var tecnologies = [
		{
			href:'https://www.mongodb.com/',
			img:'http://www.douglaspasqua.com/wp-content/uploads/2015/12/mongodb_slide.png'
		},
		{
			href:'https://openshift.redhat.com',
			img:'http://blog.toppagedesign.com/assets/images/openshift-logo.png'
		},
		{
			href:'https://nodejs.org/',
			img:'https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-128.png'
		},
		{
			href:'http://mithril.js.org/',
			img:'http://www.appjudo.com/img/technology/logos/mithril.png'
		},
	]

	return template(null,
    m('div.presentation',[
      m('h3','Apresentação'),
			m('p','O 7linhas.com é um projeto de dois brasileiros da cidade de Curitiba. ' +
				'O nosso objetivo é oferecer gratuitamente informações úteis sobre notícias ' +
				'e promoções. Ao mesmo tempo, aproveitamos para testar as incriveis tecnologias ' +
				'que este projeto utiliza:'),
		  m('div.tecnologies', tecnologies.map(function(t){
				return m('a[href=' + t.href + ']', [
					m('img[src=' + t.img +']')
				])
			})),
			m('h3','Autores'),
      m('ul', [
  			m('a[href=https://twitter.com/jhonynasc]', '@jhonynasc '),
  			m('a[href=https://twitter.com/alissonlcunha]', '@alissonlcunha')
  		])
  	])
  )
}

export var Presentation
