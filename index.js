
// import packages 
const express = require("express")
const db = require("./config/db")
const dotenv = require("dotenv")
const cors = require("cors")

//import routes
const auth = require("./routes/authRoutes")
const Emp = require("./routes/empRoutes")
const student = require("./routes/studentRoutes")

//intializa  middleware
const app = express()

app.use(cors()) //for communicating bwt 2 ports
app.use(express.json())

//configure dotenv
dotenv.config()

//connect db
db()   //db call 

//routes
app.use("/api/v1",auth)
app.use("/api/v1",Emp)
app.use("/api/v1",student)

//home route
app.get("/",(req,res)=>{
    res.send("Welcome to server")
})


//listening port
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
