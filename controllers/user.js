/**
 * Created by mosluce on 14/11/27.
 */

var express = require('express'), app = express.Router();
var userProvider = require('../libs/user-provider');

app.get('/', function(req, res) {
   res.render('user/index.ejs', {code: '<div>mosluce</div>'});
});

app.post('/login', function(req, res) {
   userProvider.authenticate(req.body.username, req.body.password, function(err, result) {
      if(err) {
         res.send(err);
         return;
      }

      res.json(result);
   });
});

module.exports = app;