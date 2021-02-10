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
	const user = {
    name: req.body.name,
		age: req.body.age,
		sex: req.body.sex,
		faculty: req.body.faculty,
		password: req.body.password
	}

	// ここにFirebaseへのデータ追加関数呼び出しを書く
	push.data_push("users",user);
	res.status(200).send(user);
})
