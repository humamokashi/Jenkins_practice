const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    address: { type: String, required: true },
    gender: { 
        type: String
    }
});

const Emp = mongoose.model('Emp', empSchema); 

module.exports = Emp;
