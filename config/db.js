const mongoose=require('mongoose');
const db=async ()=>{
    try{
        await mongoose.connect(process.env.database_URL);
        console.log("succcess");
    }
    catch(error){
        console.log(error);
    }
    
};
module.exports=db;