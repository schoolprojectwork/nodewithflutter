const router = require("express").Router();
const userController = require("../controller/usercontroller");
router.post("/regestration",userController.register);
module.exports=router;