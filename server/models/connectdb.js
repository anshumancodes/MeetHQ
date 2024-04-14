const mongoose=require("mongoose");
require('dotenv').config();


async function connectToDb(){
    
    try {
      const dbconnectionInstance=await mongoose.connect(process.env.DB_URL)
      console.log("connected to mongodb at host:",dbconnectionInstance.connection.host)
    
        
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
        process.exit();
        
    }
}


module.exports=connectToDb