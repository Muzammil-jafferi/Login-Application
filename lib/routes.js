var crypto = require('crypto')
var validator = require('validator');
var crypt = require('./controllers/user/crypt');
var userFunction = require('./controllers/user/index.js')

module.exports = function(app) {
	app.post('/register', userFunction.register);
	app.post('/login', userFunction.login);
	app.put('/resetpassword', userFunction.resetpassword);
	app.put('/update', userFunction.update);
}