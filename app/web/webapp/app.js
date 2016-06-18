import { News } from 'webapp/news/news.js'
import { Options } from 'webapp/options/options.js'
import { Presentation } from 'webapp/presentation/presentation.js'

m.route.mode = 'hash'
m.route(document.getElementById('app'), '/', {
    '/': News,
    '/news': News,
    '/options': Options,
    '/presentation': Presentation
})
