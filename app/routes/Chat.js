require('date-utils');
var express = require('express');
var router = express.Router();
var push = require('../firebase/data_push.js');
var set = require('../firebase/data_set.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;

/*
chatroom {
    roomA {
        users: {"Taro", "Ken"}
        messages {
            message1 {
                from : "Taro"
                message : "Hello"
*/

    router.post('/', function(req, res, next) {
        // ここにFirebaseへのデータ追加関数呼び出しを書く
        const userid = req.body.userid;
        push.data_push("chatroom/users",userid);
        res.status(200).send(userid);
    })



function saveMessage(messageText) {
    var dt = new Date();
    // Add a new message entry to the database.
    const message = {
      from: req.body.userid,
      text: messageText,
      timestamp: dt.toFormat("YYYYMMDDHH24MISS")
    }
    push.data_push("chatroom/messages", message);
    res.status(200).send(message);
}

