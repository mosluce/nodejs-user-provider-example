/**
 * Created by mosluce on 14/11/28.
 */
var app = require('./settings/app');
var models = require("./models");

models.sequelize.sync().success(function () {
    var server = app.listen(app.get('port'), function() {
        console.log("Server Started!");
    });
});