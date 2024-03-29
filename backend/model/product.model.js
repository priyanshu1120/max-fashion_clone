const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
       image:[],
       title:{type:String},
       description:{type:String},
       price:{type:Number},
       color:[],
       size:[],
       category:{type:String},
       gender:{type:String}
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = {ProductModel}