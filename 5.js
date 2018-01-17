var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var query = { musicdirector: "a.r.rahman" };
  dbo.collection("songdetails").find({musicdirector:"a.r.rahman"},{songname:1,id:0}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
