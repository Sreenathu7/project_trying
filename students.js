const mongoose =require("mongoose");
const schema=mongoose.Schema({
    name:String,
    age:Number,
    place:String

    
});
module.exports=mongoose.model("msco",schema);