const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    register_number:{type:String,required:true},
    name:{type:String,required:true},
    grade:{type:String,required:true},
    address:{type:String,required:true},
    phone_number:{type:String,required:true},
    gender:{type:String}
})

const Student = mongoose.model("Student",studentSchema)

module.exports = Student