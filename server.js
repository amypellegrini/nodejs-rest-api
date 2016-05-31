// Load required packages
var express = require('express');
var bodyParser = require('body-parser');

// Initialize app (express) instance
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Hello world!' });
});

app.use('/api', router)

app.listen(port);

console.log('App running on port ' + port);
