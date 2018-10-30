//importing modules
var express= require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://sekhar1926:Aditya*1996@ds227243.mlab.com:27243/ase',{
    useNewUrlParser: true
});

//on connection
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo db")
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log("Error in database:"+err);
    }
});

//port no
const port = 3000;

//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('server started');
});

app.listen(port,()=>{
    console.log('server started at port :'+port);
});