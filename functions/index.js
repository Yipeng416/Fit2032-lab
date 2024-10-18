const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true}); // 配置 CORS 以允许所有来源
admin.initializeApp();

exports.countBooks = functions.https.onRequest((req, res) => {
  cors(req, res, async () => { // 确保使用 CORS 处理请求
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;
      res.status(200).json({count: count});
    } catch (error) {
      res.status(500).json({error: "Error fetching book count"});
    }
  });
});
