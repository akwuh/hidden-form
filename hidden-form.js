function combine(name, parent) {
	return parent ? parent + '[' + name + ']' : name
}

function populate(form, data, parent) {
	for (var name in data) {
		if (!data.hasOwnProperty(name)) continue
		if (typeof data[name] == 'object') {
			populate(form, data[name], combine(name, parent))
		} else {
			var input = document.createElement('input')
			input.setAttribute('type', 'hidden')
			input.setAttribute('name', combine(name, parent))
			input.setAttribute('value', data[name])
			form.appendChild(input)
		}
	}
}

function submit(url, method, data) {
	data = data || {}
	var form = document.createElement('form')
	form.setAttribute('action', url || '')
	form.setAttribute('method', method || 'get')
	form.style.display = 'none'
	populate(form, data)
	document.body.appendChild(form)
	form.submit()
}

module.exports = {
	submit: function (options) {
		options = options || {}
		return submit(options.url, options.method, options.data)
	}
}