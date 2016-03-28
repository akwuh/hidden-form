# Overview

This simple script allows submitting forms directly from JavaScript.

# Example

```javascript
var HiddenForm = require('hidden-form')
HiddenForm.submit({
	url: 'http://akwuh.me',
	method: 'get',
	data: {name: 'john', surname: 'doe'}
})
```