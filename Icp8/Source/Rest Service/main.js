/**
 * Created by Marmik on 04/10/2016.
 */
var express = require('express');
var app = express();
var request = require('request');
app.get('/getip', function (req, res) {
    

    request('http://api.ipstack.com/136.33.154.188?access_key=c0ca9ee6ec152480cbd9fc4137aa8a03', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
//d	console.log(body);
    //All is good. Print the body
    body = JSON.parse(body);
    response = JSON.stringify(body);
        res.write(response);
        res.end();
	console.log(body)
	
});


})

var server = app.listen(8081, function () {
    // var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://127.0.0.1:%s",port)
})