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

exports.data_get = async function(post) {
  var data;
  var db = admin.database();
  var ref;

  if(post.category === "users"){
    ref = db.ref(post.category + "/" + post.id);
    console.log(post.doc);
  }
  if(post.category === "posts"){
    ref = db.ref(post.category);
  }

  await ref.once('value', (snapshot) => {
    data = snapshot.val();
  });
  return data;
};
