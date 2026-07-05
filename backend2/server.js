require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectdb=require("./config/db")
const router=require("./routes/sensorroutes");

const app=express();
app.use(cors());
app.use("/api/sensors",router);
connectdb();
const port=process.env.PORT || 5000;


app.get("/",(req,res)=>{
    res.send("hello world");
});


app.listen(port,()=>{
    console.log("server is running now");
});