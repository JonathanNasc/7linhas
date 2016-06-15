var App = {};

App.view = function(){

	return [
		m(InputShip),
		m('div#results', [
			m('div.no-ships',[
				m('img',{ src:'img/no-ships.png' }),
				m('p','Algum navio a vista?')
			])
		])
	];
}

m.route.mode = "hash";
m.route(document.getElementById("galleon-app"), "/", {
    '/': App
});