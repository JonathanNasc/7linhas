import { template } from 'webapp/commons/template.js'
var m = window.m

Promotions = {}

Promotions.controller = function () {
  var self = this

  this.lines = m.prop([])

  m.request({method: 'GET', url: 'api/get-promotions'})
    .then(function (response) {
      self.lines(response)
    })
}

Promotions.view = function (ctrl) {
  var content = m('div.promotions-list',
    ctrl.lines().map(function (line) {
      return m('div.promotion-item',
        m('a', {href: line.href, target: 'blank'}, [
          m('div', line.title),
          m('span.promotion-price', line.price)
        ])
      )
    })
  )

  return template('promotions', content)
}

export var Promotions
