const express = require("express");
const app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json());
 
//  let fs=require("fs");  
// app.get("/reading",(req,res)=>{
//   fs.readFile("snu.txt",function(err,data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//           console.log("working")
//   res.write(data)
//   return res.end()
// });

let connectionUrl ="mongodb://localhost:27017/class-db";
let Students= require("./local/students");
let Teachers= require("./local/teachers")

const mongoose = require('mongoose');
const students = require("./local/students");

mongoose.connect(connectionUrl, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch((err) => {
    console.log("Error while connecting ", err);
  });
  app.get("/inserting", (req, res) => {
    
                let t1={
              firstName:"suresh",
              place:'kknd',
              phoneNumber:4536382928,
              salary:45000,
            }
         let s1={
          
         }   
   let teach = new Teachers(t1);
   teach.save().then(()=>{
    res.send("inserting collections")
  }).catch(()=>{
    res.send("something issue")
  })
});
app.get("/getAllStudents", (req, res) => {

  Students.find().then(data=> {
      res.json(data);
  }).catch(err=> {
      res.send("Could not fetch students")
  });
})
app.get("/getDelStudents", (req, res) => {

  Students.find().deleteOne({name:"nibin"}).then(data=> {
      res.json(data);
  }).catch(err=> {
      res.send("Could not fetch students")
  });
})

app.listen(4100,()=>{
  console.log("ok Done")
})
app.get("/ww",(req,res)=>{
  let payload={
    ss:[],
    kk:[]}
    Students.find().then(data=>{
      payload.ss=data;
      Teachers.find().then(data2=>{
        payload.kk=data2;
        res.send(payload)
        console.log(payload)
      })
     
      })
    })
  
