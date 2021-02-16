var express = require('express');
var router = express.Router();
var get = require('../firebase/data_get.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/', async function(req, res, next) {
	const post = {
    doc: req.body.doc
	}

  const data = await get.data_get("posts/", post);
  console.log(data);
  res.status(200).json(data);
});
