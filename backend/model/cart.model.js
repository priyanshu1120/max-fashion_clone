const mongoose = require("mongoose")
const cartSchema = mongoose.Schema({
       image:[],
       title:{type:String},
       description:{type:String},
       price:{type:Number},
       color:[],
       size:[],
       category:[],
       gender:{type:String},
       userID:{type:String},
       productID:{type:String},
       quantity:{type:Number}
})

const cartModel = mongoose.model("cart",cartSchema)

module.exports = {cartModel}