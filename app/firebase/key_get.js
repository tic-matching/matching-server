var admin = require("firebase-admin");

// 1. サービスアカウント鍵を生成しserviceAccountKey.jsonでリネームしてフォルダ直下に配置
var serviceAccount = require("./serviceAccountKey.json");

if (admin.apps.length === 0) { //2重起動防止
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // 2. Realtime DatabaseのページでdatabaseURLを確認して反映
    databaseURL: "https://tic-matching-default-rtdb.firebaseio.com/"
  });
}

exports.key_get = async function(post) {
  var key;
  var filter;
  var db = admin.database();
  var ref = db.ref("users");
  var userRef = ref.orderByChild("mail").equalTo(post.mail);
  await userRef.once('child_added', (snapshot, prevChildKey) => {
    filter = snapshot.val();
    if (filter.password == post.password){
      key = snapshot.key;
    }
  });
  return key;
};
