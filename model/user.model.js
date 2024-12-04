import mongoose   from "mongoose";
import { books } from "./book.model";

const BooksUser=mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        match: [/^\d{10}$/, "Phone number must be exactly 10 digits"]
    },
    address:{
        type:String,
        required:true,
    },
    rentedBooks:[
        {

        bookId:{
            type:mongoose.Schema.ObjectId,
            ref:books,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        },
        fine:{
            type:Number,
            default:0
        }
    }

    ]
    
},{timestamps:true})
const user=mongoose.model("user",BooksUser);
export {user};