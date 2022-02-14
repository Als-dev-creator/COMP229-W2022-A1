/**
 * Aljohn Nazaire
 * 301063347
 * Winter 2022
 */
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
