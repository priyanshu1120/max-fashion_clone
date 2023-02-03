const mongoose = require("mongoose")
const wishlistSchema = mongoose.Schema({
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
})

const wishlistModel = mongoose.model("cart",wishlistSchema)

module.exports = {wishlistModel}