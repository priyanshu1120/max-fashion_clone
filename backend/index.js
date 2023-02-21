const express = require("express")
const app = express()
require("dotenv").config()
const {connect} = require("./Config/db.js")
const cors = require("cors")
const product = require("./routes/product.route.js");
const port=process.env.PORT||4000;
app.use(express.json())
app.use(cors({
    origin:"*"
}));

app.get("/",(req,res)=>{
    res.send("server run successfully")
})
app.use("/product",product)
app.listen(port,()=>{
       try{
            connect
            console.log(`server run on http://localhost:${port} `)
       }catch(err){
            console.log(err)
       }
})
