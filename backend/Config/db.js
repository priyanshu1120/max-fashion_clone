const mongoose  = require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', false)
const connect = mongoose.connect(process.env.MONGOURL)
module.exports = {connect}