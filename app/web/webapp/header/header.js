var m = window.m

Header = {}

Header.controller = function (tab) {
  this.tab = tab
}

Header.view = function (ctrl) {
  var tab = ctrl.tab
  return m('div.header', [
    m('h1', '7 linhas'),
    m('div.tabs', [
      m('buttom', {
        class: (tab === 'news') ? 'active' : '',
        onclick: function () { m.route('/news') }
      }, 'Noticias'),
      m('buttom', {
        class: (tab === 'promotions') ? 'active' : '',
        onclick: function () { m.route('/promotions') }
      }, 'Promoções'),
      m('buttom', {
        class: (tab === 'options') ? 'active' : '',
        onclick: function () { m.route('/options') }
      }, m('img.options-btn', {
        src: (tab !== 'options')
          ? 'webapp/header/options-light.svg'
          : 'webapp/header/options-dark.svg'
      })
      )
    ])
  ])
}

export var Header
