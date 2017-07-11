var crypt = require('../../controllers/user/crypt');

var Users = [{
	id: (Math.floor((Math.random() * 1000) + 1)),
	name: "muzammil",
	email_id: "muzammil@gmail.com",
	password: crypt.encrypt("password")
}]
console.log(Users)


class User {
	checkEmail(email) {
		var index;
		for (var i = 0; i < Users.length; i++) {
			if (Users[i].email_id === email) {
				index = i;
				break;
			}
		}
		return index;
	}

	addnewuser(name, email, password) {
		let random = (Math.floor((Math.random() * 1000) + 1)) + (new Date().getTime());
		Users.push({
			id: random,
			name: name,
			email_id: email,
			password: crypt.encrypt(password)
		});
	}

	findPassword(index) {
		var pass = Users[index].password
		return pass;
	}

	resetpassword(index, newpassword) {
		Users[index].password = newpassword
	}

	updateProfile(index, name) {
		Users[index].name = name
	}
}

module.exports = new User