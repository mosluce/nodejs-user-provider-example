/**
 * Created by mosluce on 14/12/1.
 */
var express = require('express'), app = express(),
    bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', require('./handler'));

app.listen(port);