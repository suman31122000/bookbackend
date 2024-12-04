import mongoose from mongoose;

const Admin=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
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
        reqired:true,
    },
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String,
    }
},{timestamps:true})

const admin=mongoose.model("admin",Admin);
export {admin};