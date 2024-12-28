var express = require('express')
var app = express();
var port = process.env.PORT||3400

app.get("/",(req,res)=>{
    res.send("<h1>Please Like Share and Subscribe... Please</h1>")
})

app.listen(port,()=>console.log('server running on ',port))