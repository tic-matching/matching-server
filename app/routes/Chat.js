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
        from : "Taro"
        to : "Ken"
        messages {
            message1 {            
                from : "Taro"
                message : "Hello"
*/

function makeChatroom(){
    router.post('/', function(req, res, next) {
        const chat = {
        userid: req.body.userid,
        userid2: req.body.userid2
    
        }
    
        // ここにFirebaseへのデータ追加関数呼び出しを書く
        push.data_push("chatroom",chat);
        res.status(200).send(chat);
    })
}


function saveMessage(messageText) {
    var dt = new Date();
    // Add a new message entry to the database.
    const message = {
      from: req.body.userid,
      text: messageText,
      timestamp: dt.toFormat("YYYYMMDDHH24MISS");
    }
    push.data_push("chatroom", message);
    res.status(200).send(message);
}

