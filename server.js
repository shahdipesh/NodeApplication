var express = require("express");
var pool = require("./connection");

var app = express();

app.use(express.json());

app.get("/", function (req, res) {
  pool.query(`SELECT * from facebook;`, function (err, rows) {
      if (err)throw err;
    res.send(rows);
  });
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
