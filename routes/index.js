var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

//first add the reference to the controller
var controller = require('../controller');

/* GET home page. */
router.get('/', controller.home);

module.exports = router;
