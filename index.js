var express    = require('express');
var conf       = require('./config.json')
var bodyParser = require('body-parser');
var validator  = require('validator');
var app        = express();

require('./middleware/poweredBy.js')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

require('./lib/routes.js')(app);

app.listen(conf.server.port, function() {
	console.log("Login app listening on port", conf.server.port);
});