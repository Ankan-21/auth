
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    }

})
const usermodel=new mongoose.model('user',userSchema);
module.exports=usermodel;