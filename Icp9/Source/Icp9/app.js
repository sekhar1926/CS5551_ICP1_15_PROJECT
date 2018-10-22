var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://sekhar1926:Aditya*1996@ds227243.mlab.com:27243/ase",{
   
    useNewUrlParser: true,
});


var nameSchema = new mongoose.Schema({
    id: String,
    name: String,
    course: String,
    major: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.get('/getusers',(req,res)=>{
        let search_text = req.query.major;
        console.log(search_text);
        User.find({major:{ $regex: search_text, $options: 'i' }}).exec((err, result) => {
            if (!err) {
                
                res.write("<html><head></head><body><h2>Search results for  ");
                res.write(search_text);
                res.write("</h1><table><tr><th>ID</th><th>Name</th><th>course</th><th>major</th></tr>");
                
                for(var i=0;i<result.length;i++){
                    res.write("<tr><td>");
                    res.write(result[i].id);
                    res.write("</td>");
                    res.write("<td>");
                    res.write(result[i].name);
                    res.write("</td>");
                    res.write("<td>");
                    res.write(result[i].course);
                    res.write("</td>");
                    res.write("<td>");
                    res.write(result[i].major);
                    res.write("</td></tr>");
                }
                res.write("</table></body></html>");
                res.end();
                //alert(result)
                console.log(result);
            } else {
                res.send({
                    result: "Failure",
                    message: "Error in fetching students list",
                    error: err
                });
            }
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});