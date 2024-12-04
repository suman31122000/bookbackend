import mongoose from "mongoose";
const Comment=mongoose.Schema({
  user:{
    type:mongoose.Schema.ObjectId,
    ref:"users",
    required:true,
  },
  bookname:{
    type:String,
    required:true,
  },
  comment:{
    type:String,
    required:true,
  }
},{timestamps:true})
 const comment=mongoose.model("comment",Comment)
 export default comment;