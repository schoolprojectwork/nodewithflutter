const Usermodel =require("../model/usermodel");
class UserServices{
static async registerUser(name){

    try{
const createUser = new Usermodel({name});
return await createUser.save();

    }catch(error)
    {
        throw error;
    }
}




}

module.exports = UserServices;