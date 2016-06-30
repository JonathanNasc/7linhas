import { template } from 'webapp/commons/template.js'
var m = window.m

Presentation = {}

Presentation.view = function () {
  var tecnologies = [
    {
      href: 'https://www.mongodb.com/',
      img: 'webapp/presentation/img/mongo.png'
    },
    {
      href: 'https://openshift.redhat.com',
      img: 'webapp/presentation/img/openshift.png'
    },
    {
      href: 'https://nodejs.org/',
      img: 'webapp/presentation/img/node.png'
    },
    {
      href: 'http://mithril.js.org/',
      img: 'webapp/presentation/img/mithril.png'
    }
  ]

  return template(null,
    m('div.presentation', [
      m('h3', 'Apresentação'),
      m('p', 'O 7linhas.com verifica automaticamente as 7 ' +
        'notícias mais relevantes do momento e as 7 melhores promoções do dia. ' +
        'Confira e nos diga o que achou.'),
      m('h3', 'Sobre o projeto'),
      m('p', 'O 7linhas.com é mantido por dois brasileiros da cidade de Curitiba. ' +
        'O nosso objetivo é oferecer gratuitamente informações úteis sobre notícias ' +
        'e promoções e ao mesmo tempo, aproveitamos para testar as incriveis tecnologias ' +
        'que este projeto utiliza:'),
      m('div.tecnologies', tecnologies.map(function (t) {
        return m('a[href=' + t.href + ']', [
          m('img[src=' + t.img + ']')
        ])
      })),
      m('h3', 'Autores'),
      m('ul', [
        m('a[href=https://twitter.com/jhonynasc]', '@jhonynasc '),
        m('a[href=https://twitter.com/alissonlcunha]', '@alissonlcunha')
      ]),
      m('a[href=https://github.com/JonathanNasc/7linhas]', m('img[src=webapp/presentation/img/github.png]'))
    ])
  )
}

export var Presentation
