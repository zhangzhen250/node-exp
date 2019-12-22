var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:number', function(req, res, next) {
  res.render('index', { title: "number" });
});

module.exports = router;
