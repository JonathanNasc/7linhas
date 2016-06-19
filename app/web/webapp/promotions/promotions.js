import { template } from 'webapp/commons/template.js'

Promotions = {}

Promotions.view = function () {
  return template('promotions', [
    m('br'),
    m('div', 'Em breve')
  ])
}

export var Promotions
