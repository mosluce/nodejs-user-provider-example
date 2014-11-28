/**
 * Created by mosluce on 14/11/27.
 */
var express = require('express'), app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port);