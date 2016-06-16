export var Header = {
  controller: function(page) {
    this.page = page
  },
	view: function (ctrl) {
    var page = ctrl.page
    return m('div.header', [
        m('h1','7 linhas'),
        m('div.tabs', [
          m('buttom', {
            class: (page() === 'news') ? 'active' : '',
            onclick: function(){page('news')}
          }, 'Noticias'),
          m('buttom', {
            class: (page() === 'promotion') ? 'active' : '',
            onclick: function(){page('promotion')}
          }, 'Promoções'),
          m('buttom', {
            class: (page() === 'menu') ? 'active' : '',
            onclick: function(){page('menu')}
          },'Menu')
        ])
      ])
  }
}
