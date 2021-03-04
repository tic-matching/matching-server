var express = require('express');
var router = express.Router();
var push = require('../firebase/data_push.js');
var set = require('../firebase/data_set.js');
var get = require('../firebase/key_get.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/', async function(req, res, next) {
	const user = {
    mail: req.body.mail,
    name: req.body.name,
		age: req.body.age,
		gender: req.body.gender,
		faculty: req.body.faculty,
		password: req.body.password
	}

	// ここにFirebaseへのデータ追加関数呼び出しを書く
	await push.data_push("users",user);

	const data = await get.key_get({
		password: req.body.password, 
		mail: req.body.mail
	});
  console.log(data);
  res.status(200).json(data);
})
