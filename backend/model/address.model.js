const mongoose = require("mongoose")
const addressSchema = mongoose.Schema({
       fullname:{type:String},
       city:{type:String},
       pincode:{type:Number},
       state:{type:String},
       building_name:{type:String},
       street_name:{type:String},
       landmark:{type:String},
       addresstype:{type:String},
       userID:{type:String}
})

const addressModel = mongoose.model("address",addressSchema)

module.exports = {addressModel}