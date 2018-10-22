var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://sekhar1926:Aditya*1996@ds227243.mlab.com:27243/ase";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected successfully!");
    db.close();

});