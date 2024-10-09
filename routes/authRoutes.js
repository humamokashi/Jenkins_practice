const express = require("express") //

const {registration,Login}=require("../controller/authController")

const router = express.Router()  //

//create endpoint

router.post("/auth/registration",registration)
router.post("/auth/login",Login)

module.exports=router //