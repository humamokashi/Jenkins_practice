// const mongoose = require("mongoose")

// // Connect to MongoDB

// const db=async()=>{
//     try {
//         // await mongoose.connect(process.env.MONGO_URI)
//         // console.log("MongoDB connected successfully")

//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
        
//     } catch (error) {
//         console.log("db connection error",error)
//     }

// }
// module.exports = db

const mongoose = require("mongoose");

// Connect to MongoDB
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("db connection error", error);
    }
};

module.exports = db;
