const express = require("express");
const app = express();
let sumOfNum = require("./mylib/sum").sumOfNumbers;
let bodyParser = require('body-parser')
app.use(bodyParser.json());

let connectionUrl ="mongodb://localhost:27017/news"
let mongoose =require("mongoose")
let textFile=require("./models/students")

mongoose.connect(connectionUrl,{useNewUrlParser:true})
.then(() => {
    console.log("Mongoose connected");
  })
  .catch((err) => {
    console.log("Error while connecting ", err);
  });

app.get("/promises",(req,res)=>{
    then(() => {
        console.log("Mongoose connected");
      })
      .catch((err) => {
        console.log("Error while connecting ", err);
      });
})

app.get("/getAllStudents", (req, res) => {

    textFile.find().then(data=> {
        res.json(data);
    }).catch(err=> {
        res.send("Could not fetch students")
    });
})

app.get("/insert", (req, res) => {

    let s1 = {
        name: 'Simil',
        age: 22,
        mark: 88
    }

    let stud = new textFile(s1);
    stud.save().then(()=>{
        res.send("Inserted Successfully");
    }).catch(()=>{
        res.send("something wrong")
    });

});





app.listen(4343,()=>{
    console.log("working")
})