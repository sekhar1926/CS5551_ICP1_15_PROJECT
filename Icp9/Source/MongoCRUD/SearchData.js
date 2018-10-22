var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://sekhar1926:Aditya*1996@ds227243.mlab.com:27243/ase";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ase");
    //Find the first document in the customers collection:
    dbo.collection("users").find({"major" : "minor"}, { projection: { _id: 0, name: 1 ,course: 1 } } ).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});