/*global m */
var header = {
  controller: function() {
    // dosomething
  },
	view: function (ctrl) {
    return m('div.header', [
        m('h1','7 Linhas'),
        m('div.tabs', [
          m('a','Noticias'),
          m('a','Promoções'),
          m('a','Menu')
        ])
      ])
  }
}
