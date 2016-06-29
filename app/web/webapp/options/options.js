import { template } from 'webapp/commons/template.js'

Options = {}

Options.view = function () {
	var content = m('div.options',[
		m('ul', [
			m('li', {onclick : function(){m.route('/presentation')}}, 'Apresentação'),
			m('li', 'Entre em contato')
		])
	])

	return template('options', content)
}

export var Options
