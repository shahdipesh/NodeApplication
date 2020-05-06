var express = require ('express');
var app = express();
app.use (express.json());
app.get ('/',(req,res)=>{
    res.send ({
        "message":"ok",
        "status":200
    })
})

app.listen (3000,function(){
    console.log("Server started at port 3000");
});