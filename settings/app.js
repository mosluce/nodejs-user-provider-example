/**
 * Created by mosluce on 14/11/28.
 */
var express = require('express'), app = express(),
    bodyParser = require('body-parser'),
    controller = require('./controller'),
    view = require('./view');

app.set('port', process.env.PORT || 3000);

//靜態文件
app.use(express.static(process.cwd() + '/public'));

//request body 轉換
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//view engine
app.set('view engine', 'ejs');

//view
app.use(view.init(app));

//controller
app.use("/", controller.init(app));

module.exports = app;