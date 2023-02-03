const express = require("express")
const app = express()
require("dotenv").config()
const {connect} = require("./Config/db.js")
const cors = require("cors")
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("server run successfully")
})

app.listen(process.env.PORT,async()=>{
       try{
          await connect
          console.log(`server run on http://localhost:${process.env.PORT} `)
       }catch(err){
           console.log(err)
       }
})
