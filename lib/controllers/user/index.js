let crypto = require('crypto')
let validator = require('validator');
let crypt = require('../../model/user/crypt');
let user = require('../../model/user/addNewuser');

module.exports = {
    register: function(req, res) {
        if (!req.body.name || !req.body.email_id || !req.body.password) {
            return res.send('please give all details!');
        }
        if (!validator.isEmail(req.body.email_id)) {
            return res.send('Wrong email_id')
        }
        let b = user.checkEmail(req.body.email_id);
        if (b >= 0) {
            return res.send("Email already Exist")
        } else {
            user.addnewuser(req.body.name, req.body.email_id, req.body.password)
            return res.send("User added")
        }
    },

    login: function(req, res) {
        if (!req.body.name || !req.body.email_id || !req.body.password) {
            return res.send('please insert require details!');
        }
        let b = user.checkEmail(req.body.email_id);
        if (b >= 0) {
            let k = user.findPassword(b)
            if (k === crypt.encrypt(req.body.password)) {
                return res.send("Login succesfull");
            } else {
                return res.send("username or password does not match")
            }
        } else {
            return res.send("username does not exist")
        }
    },

    resetpassword: function(req, res) {
        if (!req.body.email_id || !req.body.password || !req.body.addNewpassword) {
            res.send('Invalid details!');
        }
        let b = user.checkEmail(req.body.email_id)
        if (b >= 0) {
            user.resetpassword(b, req.body.addNewpassword)
            return res.send("Password Reset")
        } else {
            return res.send("Something went wrong")
        }
    },

    update: function(req, res) {
        if (!req.body.email_id) {
            res.send('Invalid details!');
        }
        let b = user.checkEmail(req.body.email_id)
        if (b >= 0) {
            user.updateProfile(b, req.body.name)
            return res.send("profile updated")
        } else {
            return res.send("Something went wrong")
        }
    }
}


