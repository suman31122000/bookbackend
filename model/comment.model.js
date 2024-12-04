import mongoose from "mongoose";
import { type } from "os";
const Comment=mongoose.Schema({
  user:{
    type:String,
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