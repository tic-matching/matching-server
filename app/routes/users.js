var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/', function(req, res, next) {
	const data = {
		name: req.body.name,
		age: req.body.age,
		sex: req.body.sex,
		faculty: req.body.faculty,
		password: req.body.password
	}

	// ここにFirebaseへのデータ追加関数呼び出しを書く
	// Ex: const result = resisterUser(data);

	res.status(200).send(data);
})