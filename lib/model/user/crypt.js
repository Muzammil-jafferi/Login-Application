var crypto = require('crypto')
var conf = require("../../../config.json")


class crypt {
	encrypt(text) {
		var cipher = crypto.createCipher(conf.algorithm, conf.password_salt)
		var crypted = cipher.update(text, 'utf8', 'hex')
		crypted += cipher.final('hex');
		return crypted;
	}
	decrypt(text) {
		var decipher = crypto.createDecipher(conf.algorithm, conf.password_salt)
		var dec = decipher.update(text, 'hex', 'utf8')
		dec += decipher.final('utf8');
		return dec;
	}

}
module.exports = new crypt