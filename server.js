var express = require('express')
var app = express();
var port = process.env.PORT||3400

app.get("/",(req,res)=>{
    res.send("hello Hope you like this video, please like share and subscribe")
})

app.listen(port,()=>console.log('server running on ',port))