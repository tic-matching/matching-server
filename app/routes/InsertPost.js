var express = require('express');
var router = express.Router();
var push = require('../firebase/data_push.js');
var set = require('../firebase/data_set.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/', function(req, res, next) {
	const post = {
    userid: req.body.userid,
    time: req.body.time,
    text: req.body.text

	}

	// ここにFirebaseへのデータ追加関数呼び出しを書く
	push.data_push("posts",post);
	res.status(200).send(post);
})
