var express = require('express');
var http = require('http');

var login=require("./login")

var app = express()
var port = http.createServer(app)

// app.get("/check",(req,res=>{
//     console.log("getting your req")
// }))


app.use("/api",login)
port.listen("3000",()=>{
    console.log("Server is running on port 3000")

})



http.createServer(function (req,res){

   
    res.end('Hello World');

}).listen(3000,()=>{
    console.log('Server is running on port 3000');

});

