/**
 * Created by mosluce on 14/11/28.
 */
module.exports.init = function(app) {
    return function(req, res, next) {
        var p = req.path.split(/\//g);
        req.controller = p[1];
        req.action = p[2];

        app.set('views', process.cwd() + '/views/' + req.controller);

        next();
    };
}