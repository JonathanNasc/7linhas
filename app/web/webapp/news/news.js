import { template } from 'webapp/commons/template.js'

News = {}

News.controller = function() {
  var self = this

  this.lines = m.prop([])

  m.request({method: "GET", url: "api/get-news"})
    .then(function(response){
      self.lines(response)
    })

}

News.view = function (ctrl) {
  var content = m("div.news-list",
    ctrl.lines().map(function(line) {
      return m("div.news-item",
        m("a", {href: line.href, target:'blank'}, line.title)
      )
    })
  )

  return template('news', content)
}

export var News
