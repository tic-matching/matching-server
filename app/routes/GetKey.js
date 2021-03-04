var express = require('express');
var router = express.Router();
var get = require('../firebase/key_get.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/', async function(req, res, next) {
	const post = {
    mail: req.body.mail,
    password: req.body.password
	}

  const data = await get.key_get(post);
  console.log(data);
  res.status(200).json(data);
});
