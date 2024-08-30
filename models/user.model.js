const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   firstName:{
        type : String,
        reqired:true
   },
   lastName : String,
   mobileNo:{
       type:String,
   },
   email:{ 
       type :String,
       reqired:true
    },
    age : {
        type : String
    },
    department : {
        type : String
    },
    password:{
          type:String    
    },
   isDelete:{
       type:Boolean,
       default:false
   }
},{
    versionkey:false,
    timestamp:true
})

module.exports = mongoose.model("users",userSchema)