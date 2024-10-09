const Student = require("../models/studentModel")


//!POST
exports.addStudent=async(req,res)=>{
  try {
    const {register_number,name,grade,address,gender,phone_number} = req.body
    if(!register_number || !name || !grade || !address || !gender || !phone_number){
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newStudent = new Student({
        register_number,
        name,
        grade,
        address,
        gender,
        phone_number
    })

    const savedStudent = await newStudent.save()

    res.status(201).json({
        message: "Student Registered Successfully",
        student: savedStudent
    });

  } catch (error) {
    console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
  }
}

//!GET
exports.getStudents = async(req,res)=>{
    try {
        const getAllStudent = await Student.find({})

        if(!getAllStudent){
            return res.status(400).json({
                message: "Employee Not Found"
            })
        }
        res.status(201).json(getAllStudent)
    } catch (error) {
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

//!Get BY ID

exports.getOneStudent = async(req,res)=>{
       try {
        const {id} =req.param
        const getAllStudent = await Student.find({id})

        if(!getAllStudent){
            return res.status(400).json({
                message: "Student Not Found"
            })
        }
    
        res.status(201).json(getAllStudent)

       } catch (error) {
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
       }    
}

//!Update

exports.updateStudent =async(req,res)=>{
    try {
        const {id} =req.query
        const getOneStudents = await Student.findById(id)
        if(!getOneStudents){
            return res.status(400).json({
                message: "Student Found"
            })
        }
            const {register_number,name,grade,address,gender,phone_number} = req.body
            if(!register_number || !name || !grade || !address || !gender || !phone_number){
                return res.status(400).json({
                    message: "All fields are required"
                })
        }
    
        getOneStudents.register_number=register_number
        getOneStudents.name=register_number
        getOneStudents.grade=grade
        getOneStudents.address=address
        getOneStudents.gender=gender
        getOneStudents.phone_number=phone_number
       
        await getOneStudents.save()

        res.status(200).json({
            message: "Updated Successfully",getOneStudents
        });

    } catch (error) {
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}


//!Delete

exports.deleteStudent = async (req,res)=>{
    try {
        const {id} =req.query
        console.log(id)
        const getOneStudent = await Student.findById(id)
        if(!getOneStudent){
            return res.status(400).json({
                message: "Student  Not Found"
            })
        }

        const delStudent = await Student.findByIdAndDelete(id)

        res.status(200).json({
            message:"Delete Successfully"
        })


    } catch (error) {
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}



