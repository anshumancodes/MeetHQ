const mongoose=require("mongoose");
// 


async function connectToDb(url){
    
    try {
        return mongoose.connect(url);
    
        
    } catch (error) {
        console.log(`MongoDB connection error: ${err}`);
        process.exit();
        
    }
}


module.exports={connectToDb};