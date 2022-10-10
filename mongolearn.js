var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

 function sortingMongo(){  MongoClient.connect(url, function(err, db) {
  if (err){
    console.log("couldnot work")
  }
  var dbo = db.db("ssr");
  var mysort={name:-1}
  dbo.collection("ssoi").find({}).sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
 }
//sortingMongo()


 function insertingMongo(){   MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log("something issue")
  }
  var dbo = db.db("ssr");
  var myobj = { name: "ramu", age:"37",place:"kakkanad" };
  dbo.collection("ssoi").insertOne(myobj, function(err, res) {
    if (err) {
      console.log("not working")
    }else{
    console.log("1 document inserted");
    }
    db.close();
  });
});}
//insertingMongo()


 function deletingMongo(){ MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ssr");
  var myquery = {name:"ramu"};
  dbo.collection("ssoi").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});}
//deletingMongo()


 function findingMongo(){ MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ssr");
  
  dbo.collection("ssoi").find({}).toArray( function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});}
//findingMongo()

function queryingMongo(){
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ssr");
  var query = { name:"kk" };
  dbo.collection("ssoi").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}
//queryingMongo()

function updatingMongo(){MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ssr");
  var lastValue={name:"basheer"}
  var newvalues = { $set: {name: "raju", age:"23" ,place:"pkd"} };
  dbo.collection("ssoi").updateOne(lastValue,newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
}
//updatingMongo()

function limitsOfMongo(){ MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ssr");
    dbo.collection("ssoi").find({}).limit(3).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });}
limitsOfMongo()