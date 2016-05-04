var App = {};

App.view = function(){

	return [
		m('div', [
			m('img',{ src:'http://www.prosadigital.com.br//wp-content/uploads/2012/03/Sucesso-05mar1.jpg' })
		])
	];
}

m.route.mode = "hash";
m.route(document.getElementById("teste"), "/", {
    '/': App
});