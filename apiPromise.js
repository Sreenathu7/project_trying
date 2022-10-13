const express = require("express");
const app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json());
 
 let fs=require("fs");  
app.get("/reading",(req,res)=>{
  fs.readFile("snu.txt",function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
          console.log("working")
  res.write(data)
  return res.end()
});
app.listen(4100,()=>{
  console.log("ok Done")
})
})
