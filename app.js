/**
 * Created by mosluce on 14/11/27.
 */
var express = require('express'), app = express(), bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user', require('./controllers/user'));
app.use('/$', function(req, res) {
    res.send("Welcome!");
});
app.use('*', function(req, res) {
    res.sendStatus(404);
});

app.listen(port);