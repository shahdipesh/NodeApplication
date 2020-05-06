var express = require ('express');

var pool = require('./connection');

var app=express();
app.use(express.json());

app.get('/alluser',(req,res)=>{
    pool.query(
        `SELECT * FROM facebook`,(err,rows)=>{
            if (err)throw err;
            res.send(rows);
        }
    )
})

app.post('/createUser',(req,res)=>{
    var username = req.body.username;
    var password= req.body.password;
    pool.query(
        `INSERT INTO facebook (username,password) VALUES (?,?);`,[username,password],(err,rows)=>{
            if (err)throw err;
            res.send(rows);
        }
    )
})

app.delete('/deleteUser',(req,res)=>{
    var username = req.body.username;
    pool.query(
        `DELETE FROM facebook WHERE username =?;`,[username],(err,rows)=>{
            if (err)throw err;
            res.send(rows);
        }
    )
})

app.put('/updateUser',(req,res)=>{
    var username = req.body.username;
    var oldUsername = req.body.oldUsername;
    pool.query(
        `UPDATE facebook SET username =? WHERE username =?;`,[username,oldUsername],(err,rows)=>{
            if (err)throw err;
            res.send(rows);
        }
    )
})

app.listen (3000,()=>{
    console.log ("Server started at port 3000");
})