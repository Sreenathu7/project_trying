// let obj=[{
//     name:"jijith",
// age:22  },{
//     name:"sreenath",
//         age:23,
// }]
// let express=require('express')
// let app=express()
// app.get('/',function(req,res){

// res.json(obj).status(200)
// })
// app.listen(4000,function(){
//     console.log("running localiy")
// })

const express=require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
});pn
app.listen(7000,()=>console.log('hello world app listening on pport ${port}!'))