const mongoose =require('mongoose');
const {Schema} = mongoose;
const hobbiesSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique: false

    },
    phno:{
        type: String,
        required : true
    },
   hobby: {
        type: Array,
    },
    date: {
        type: Date,
        default: Date.now
    }

})
hobbiesSchema.clearIndexes();
// hobbiesSchema.dropIndex('email_1', function(err, result) {
//     if (err) throw err;
//     console.log("Unique key constraint removed from the email field.");
//     db.close();
//   });
module.exports = mongoose.model("hobbie",hobbiesSchema);