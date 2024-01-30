const UserServices= require("../services/userservices");


exports.register= async (req,res,next)=>{

try{
const {name}=req.body;
const successRes= await UserServices.registerUser(name);
res.json({status:true,success:"data has been send successfully"});
}catch(error)
{
    throw error;
}



}