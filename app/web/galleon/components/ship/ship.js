var Ship = {
	title  : '',
	href   : '',
	url    : '',
	price  : '',
	type   : 'news',
	isValid: function(){
		if(this.type==='promotion' && !this.price) return false
		return this.title && this.href && this.url && this.type
	}
}