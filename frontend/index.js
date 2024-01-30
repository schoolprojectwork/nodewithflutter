const app = require("./app");
const db = require("./config/db");
const ModelName = require("./model/usermodel");
const PORT = process.env.PORT || 4300;

app.get("/",(req,res)=>{
    res.send("this code is ono the server");
});
app.listen(PORT,()=>{
    console.log(`server is created on the port number ${PORT}`);

});