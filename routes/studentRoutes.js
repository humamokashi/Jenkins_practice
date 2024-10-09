const express = require ("express")

const {addStudent,getStudents,getOneStudent,updateStudent,deleteStudent} = require ("../controller/studentController")
const isAuthenticate = require ("../middleware/authMiddleware")

const router = express.Router()

router.use(isAuthenticate) 

router.post("/student/addStudent", addStudent);
router.get("/student/getStudents",getStudents);
router.get("/student/getOneStudent",getOneStudent);
router.put("/student/updateStudent",updateStudent);
router.delete("/student/deleteStudent",deleteStudent)

module.exports=router