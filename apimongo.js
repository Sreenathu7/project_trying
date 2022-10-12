const express = require("express");
const app = express();
let sumOfNum = require("./mylib/sum").sumOfNumbers;
let bodyParser = require('body-parser')
app.use(bodyParser.json())

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


  app.post("/insertnames",(req,res)=>{
    console.log("woww")
    
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ssr");
    var inserting= {name:"simil",place:"kknd"}
    dbo.collection("ssoi").insertOne(inserting,function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
   
    res.json(req.body)
 })




app.post("/insertVlidation",(req,res)=>{
    console.log("working else")
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ssr");
        var myquery = { name: "kk",age:25,place:"developer" };
        dbo.collection("ssoi").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
          res.send(req.body)
        });
      });
})


app.listen(3230,()=>{
    console.log("good Working")
})