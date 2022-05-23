var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD APPLICATION' });
});

router.get('/add-user', function(req, res, next) {
  res.render('add_user', { title: 'CRUD APPLICATION' });
});



module.exports = router;
