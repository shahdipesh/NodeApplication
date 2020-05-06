var express = require ('express');

var app=express();

app.get('/',(req,res)=>{
    res.send("Sever running successfully");
})
app.listen (3000,()=>{
    console.log ("Server started at port 3000");
})