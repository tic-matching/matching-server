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

exports.data_push = async function(category, data) {

  var db = admin.database();
  var ref = db.ref(category);

  ref.push(data);

  await ref.on("value", function(snapshot) {
      console.log("value Changed!!!");
      console.log(snapshot.val());
  },
  function(errorObject) {
      console.log("failed: " + errorObject.code);
  } );
  return;
};
