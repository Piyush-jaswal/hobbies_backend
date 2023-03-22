const mongoose = require('mongoose');
const DATABASE = process.env.DATABASE;
const mongoURI = "mongodb+srv://piyush1233210jas:piyushpassword@hobbies.oychzrk.mongodb.net/?retryWrites=true&w=majority";//mongodb://localhost:27017 
mongoose.set('strictQuery', true);
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("I am Connnected");
    })
}
module.exports = connectToMongo;