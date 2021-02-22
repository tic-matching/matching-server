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

function makeChatroom(userid){
    // ここにFirebaseへのデータ追加関数呼び出しを書く
    const user_array = [];
    user_array.push(userid);
    const chatroom = {
        users: user_array
    };
    push.data_push("/chatroom",chatroom);
    res.status(200).send(chatroom);
}


function saveMessage(userId, messageText, chatroomId){
    var dt = new Date();
    // Add a new message entry to the database.
    const message = {
      from: userId,
      message: messageText,
      timestamp: dt.toFormat("YYYYMMDDHH24MISS")
    }
    console.log(message)
    push.data_push("chatroom/" + chatroomId + "/messages", message);
    res.status(200).send(message);
}

