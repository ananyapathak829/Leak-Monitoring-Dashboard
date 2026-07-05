const mongoose= require("mongoose");
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected");
    }
    catch(error){
        console.error("connection failed");
        console.error(error.message);
    }
}
module.exports=connectdb;