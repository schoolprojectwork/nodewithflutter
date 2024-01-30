const express =require("express");
const bodyparser = require("body-parser");
const userRoutes = require("./routes/userroutes");
const app= express();
app.use(bodyparser.json());
app.use("/",userRoutes);
module.exports=app;
