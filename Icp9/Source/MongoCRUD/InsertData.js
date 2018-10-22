

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://sekhar1926:Aditya*1996@ds227243.mlab.com:27243/ase";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ase");
    var myobj = { "id" : "1234",
        "name" : "kumar",
        "course":"Masters",
        "major/minor":"minor" };
    dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

