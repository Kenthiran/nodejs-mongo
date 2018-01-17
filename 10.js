var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}, {singer:true, _id: false, name: true, address: true }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
