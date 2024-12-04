import mongoose from "mongoose";
const Books=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    publication:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
    }
},{timestamps:true})
Books.index({ title: 'text', author: 'text', description: 'text' });
const books=mongoose.model("books",Books);
export default books;