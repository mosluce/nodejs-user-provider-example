/**
 * Created by mosluce on 14/11/28.
 */

var fs = require('fs'), path = require('path'), url = require('url');
var controller_dir = '../controllers';

module.exports.init = function(app) {
    return function(req, res, next) {

        var controller = require(path.join(controller_dir, req.controller));
        app.use(controller[req.method][req.action]);

        next();
    };
};