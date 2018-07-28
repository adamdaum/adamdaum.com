var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Adam Daum' });
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/Home', function(req, res, next) {
  //res.render('index', { title: 'Adam Daum' });
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

/* GET resume page. */
router.get('/Resume', function(req, res, next) {
  //res.render('index', { title: 'Adam Daum' });
  res.sendFile(path.join(__dirname, '../views/resume.html'));
});

module.exports = router;

