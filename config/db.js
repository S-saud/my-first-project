const mongoose=require('mongoose');
const db=async ()=>{
    try{
        await mongoose.connect(process.env.database_URL || "mongodb://127.0.0.1:27017/walletDB");
        console.log("succcess");
    }
    catch(error){
        console.log(error);
    }
    
};
module.exports=db;