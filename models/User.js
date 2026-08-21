const mongoose=require('mongoose');
const newuser=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    age:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        default:"student",
        enum:["student","admin","teacher"]
        }
},{timestamps:true}
);
const uuser=mongoose.model("user",newuser);
module.exports=uuser;
