const jwt = require("jsonwebtoken")

const isAuthenticate=(req,res,next)=>{
   const token = req.header("authToken")
   if(!token){
    return res.status(401).json({
        message:"Login Required"
    })
   }

   jwt.verify(token,process.env.JWT_SECRET,async(error,decode)=>{
       if(error){
        return res.status(401).json({
        message:"Invalid or expired token"
        })
       }
       req.user=decode
       next()
   })
}
module.exports=isAuthenticate
