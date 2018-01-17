var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
    { songname: 'thaniye thananthaniye', flim: 'rhythm',musicdirector: 'a.r.rahman', singer: 'shankar mahadevan'},
    { songname: 'evano oruvan', flim: 'alai payuthey',musicdirector: 'a.r.rahman', singer: 'swamalatha'},
    { songname: 'roja poonthottam', flim: 'kannukkul nilavu',musicdirector: 'ilayaraaja', singer: 'unnikrishnan,anuradha sriram'},
    { songname: 'vennilave vennilave', flim: 'minsara kanavu',musicdirector: 'a.r.rahman', singer: 'hariharan,sadhana sargam'},
    { songname: 'sollamal thottu chellum', flim: 'dheena',musicdirector: 'yuvan shankar raja', singer: 'hariharan'},
  ];
  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
