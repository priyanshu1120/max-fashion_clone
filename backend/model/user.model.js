const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
       fname:{type:String},
       lname:{type:String},
       phone_no:{type:Number},
       email:{type:String},
       gender:{type:String},
   
})

const userModel = mongoose.model("user",userSchema)

module.exports = {userModel}