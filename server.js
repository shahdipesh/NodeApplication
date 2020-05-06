var express = require ('express');

var pool = require('./connection');

var app=express();

app.get('/',(req,res)=>{
    pool.query(
        `SELECT * FROM facebook`,(err,rows)=>{
            if (err)throw err;
            res.send(rows);
        }
    )
})
app.listen (3000,()=>{
    console.log ("Server started at port 3000");
})