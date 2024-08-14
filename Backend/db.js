const mongoose = require('mongoose');
const  mongoURI = "mongodb://localhost:27017/"

const connectTOMongo = async () =>{
    await mongoose.connect(mongoURI)
        console.log("Connected")
    }

module.exports = connectTOMongo