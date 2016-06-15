var InputShip = {
    controller: function() {
        var self = this;

        self.ship = m.prop(Ship);
        
        self.sendShip = function(){
            if(!self.ship().isValid()) return alert("É necessário preenchar todos os campos");
            console.log('ship: ', JSON.stringify(self.ship()));
            loading();
        }

        var loading = function(){
            var loadView = m('img',{ src:'img/loading.gif', class:'loading-gif'});
            m.render(document.getElementById("results"), loadView, true)
        };
    },
    view: function(ctrl) {
        var ship = ctrl.ship;

        return m('div#inputs.basic-grey', [
            m('div',[
                m('span.radio-ship-type',{
                    class: (ship().type === 'news') ? 'selected' : '',
                    onclick: function(){ship().type = 'news'}
                },'NOTÍCIA'),
                m('span.radio-ship-type',{
                    class: (ship().type === 'promotion') ? 'selected' : '',
                    onclick: function(){ship().type = 'promotion'}
                },'PROMOÇÃO'),
                m('input[type=text]',{
                    placeholder: 'url',
                    value: ship().url,
                    onchange: m.withAttr('value', function(value){ ship().url = value }) 
                }),
                m('input[type=text]',{
                    placeholder: 'title',
                    value: ship().title,
                    onchange: m.withAttr('value', function(value){ ship().title = value }) 
                }),
                m('input[type=text]',{
                    placeholder: 'href',
                    value: ship().href,
                    onchange: m.withAttr('value', function(value){ ship().href = value }) 
                }),
                m('input[type=text]',{
                    value: ship().price,
                    placeholder: 'price',
                    onchange: m.withAttr('value', function(value){ ship().price = value }),
                    style: (ship().type === 'news') ? {display: 'none'} : {}
                }),
                m('button',{
                    onclick: ctrl.sendShip,
                    class: 'button'
                },'DISPARAR')
            ])
        ])
    }
}