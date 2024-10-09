const Auth = require("../models/authModel")  //
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

//signin controller
exports.registration = async (req, res) => { //
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(401).json({
          message: "All fields are required"
        });
      }
      //hash code
      const hashpassword = await bcryptjs.hash(password,3)
      const newAuth = new Auth({ email, password:hashpassword })
      const saveAuth=await newAuth.save();
      res.status(201).json({
        message: "Auth Registered Successfully",
        saveAuth
      });
    } catch (error) {
      console.error("SignUp error", error);
      res.status(500).json({
        message: "Server Error"
      });
    }
  };

//login controller
exports.Login=async(req,res)=>{
  try {
    const {email,password} =req.body //email pswrd getting from body
    //validate body is empty or not
    if(!email || !password){
       return res.status(401).json({
          message: "All fields are required"   
       })
    }
    //finding user in model
    const user = await Auth.findOne({email})  
    //validating if user is present or not
    if(!user){
      return res.status(401).json({
        message:"User not found"
      })
    }
    //validating password
    const comparePassword = await bcryptjs.compare(password,user.password)
    //checking password is right or not
    if(!comparePassword){
      return res.status(401).json({
        message:"Wrong Password"
      })
    }

    //generate payload

    const data = {
      user:{
        id:user.email
      }
    }
    //generating jwt token
    const authToken = jwt.sign(data,process.env.JWT_SECRET)
   //login successfull
    res.status(200).json({
      message: "Login Success",authToken
    })
    
    
  } catch (error) {
    console.error("Error",error)
    res.status(500).json({
      message:"Server error"
    })
  }


}

