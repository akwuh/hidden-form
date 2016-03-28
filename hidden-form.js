function submit(url, method, data) {
	data = data || {}
	var form = document.createElement('form')
	form.setAttribute('action', url || '')
	form.setAttribute('method', method || 'get')
	form.style.display = 'none'
	for (var name in data) {
		if (data.hasOwnProperty(name)) {
			var input = document.createElement('input')
			input.setAttribute('type', 'hidden')
			input.setAttribute('name', name)
			input.setAttribute('value', data[name])
			form.appendChild(input)
		}
	}
	document.body.appendChild(form)
	form.submit()
}

module.exports = {
	submit: function (options) {
		options = options || {}
		return submit(options.url, options.method, options.data)
	}
}