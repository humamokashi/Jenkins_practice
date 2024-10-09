const express=require("express")

const {EmpData,getEmp,getOneEmp,updateEmp,deleteData} = require("../controller/empController")
const isAuthenticate = require("../middleware/authMiddleware") // validate

const router = express.Router()

router.use(isAuthenticate) //validate

router.post("/emp/empData", EmpData);
router.get("/emp/getData",getEmp);
router.get("/emp/getOneData",getOneEmp);
router.put("/emp/updateData",updateEmp);
router.delete("/emp/deleteData",deleteData)

module.exports=router