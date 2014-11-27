/**
 * Created by mosluce on 14/11/27.
 */

var express = require('express'), router = express.Router();

router.get('/', function(req, res) {
   res.render('user/index.ejs', {code: '<div>mosluce</div>'});
});

module.exports = router;