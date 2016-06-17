
var getNewsLines = function(){
  return m.request({method: "GET", url: "api/get-lines"})
    .then(function(lines) {
        return lines
    });
}

export var News = {
  controller: function() {
    var self = this

    this.newsLines = m.prop([])
    getNewsLines()
      .then(function(lines){
        self.newsLines(lines)
      })

  },
	view: function (ctrl) {
    return m("div.news-list",
      ctrl.newsLines().map(function(line) {
        return m("div.news-item",
          m("a", {href: line.href, target:'blank'}, line.title)
        )
      })
    )
  }
}
