const Emp = require("../models/empModel");

//! POST ROUTE
exports.EmpData = async (req, res) => {
    try {
        const { email, name, phone_number, address, gender } = req.body;
        
        // Check if all required fields are provided
        if (!name || !email || !phone_number || !address || !gender) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Create a new employee object
        const newEmp = new Emp({
            email,
            name,
            phone_number,
            address,
            gender
        });
        
        // Save the employee data to the database
        const savedEmp = await newEmp.save();

        // Respond with success message
        res.status(201).json({
            message: "Employee Registered Successfully",
            employee: savedEmp
        });

    } catch (error) {
        // Log the error to the console and respond with a server error
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

//!GET Route

exports.getEmp = async(req,res)=>{
    try {
        const getAllEmps = await Emp.find({})
        // console.log(getAllEmps)
        if(!getAllEmps){
            return res.status(400).json({
                message: "Employee Not Found"
            });
        }

        res.status(201).json(getAllEmps)


    } catch (error) {
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

//!getById

exports.getOneEmp = async(req,res)=>{
    try {
        const {id} = req.query   //param---query  

         // same as above get
        const getAllEmps = await Emp.findById(id)
        // console.log(getAllEmps)
        if(!getAllEmps){
            return res.status(400).json({
                message: "Employee Not Found"
            });
        }

        res.status(201).json(getAllEmps)


    } catch (error) {
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });

    }
}

//!Update

exports.updateEmp = async(req,res)=>{
    try {
        const {id} = req.query
        const getOneEmps = await Emp.findById(id)
        if(!getOneEmps){
            return res.status(400).json({
                message: "Employoee Found"
            });
        }

        const { email, name, phone_number, address, gender } = req.body;  //same as create
        if (!name || !email || !phone_number || !address || !gender) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        getOneEmps.email = email
        getOneEmps.name = name
        getOneEmps.phone_number = phone_number
        getOneEmps.address = address
        getOneEmps.gender = gender

        await getOneEmps.save()

        res.status(200).json({
            message: "Updated Successfully",getOneEmps
        });
        
        
    } catch (error) {
        console.error("Data Error:", error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

//!DELETE
 
exports.deleteData=async(req,res)=>{
    try {
        //same as above update
        const {id} = req.query
        const getOneEmps = await Emp.findById(id)
        if(!getOneEmps){
            return res.status(400).json({
                message: "Employoee Found"
            });
        }

        const delEmp = await Emp.findByIdAndDelete(id)

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

