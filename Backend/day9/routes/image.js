var express = require('express');
var router = express.Router();
var path = require('path')

/* GET users listing. */
router.get('/:imgName', function(req, res, next) {

  res.sendFile(path.join(__dirname, `../public/images/${req.params.imgName}`));
});

module.exports = router;
