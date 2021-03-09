var express = require('express');
var router = express.Router();
var get = require('../firebase/data_get.js');

module.exports = router;

router.get('/', async function(req, res, next) {
	const post = {
    id: req.query.userid,
    category: "users"
	}

  const data = await get.data_get(post);
  console.log(data);
  res.status(200).json(data);
});
