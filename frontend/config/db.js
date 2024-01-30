const mongoose = require("mongoose");
const db =mongoose.connect("mongodb://127.0.0.1:27017/finally").then(()=>{
    console.log("mongo db has been connection successfully");
}).catch((error)=>{
    console.log("error has been detected");
});
module.exports= db;