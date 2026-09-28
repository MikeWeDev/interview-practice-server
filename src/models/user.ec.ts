import mongoose from "mongoose";

export type UserRole = "admin" | "customer";

interface UserDocument {
    username: string;
    password: string;
    role: UserRole;
    createdAt: Date;
}

const userschma = new mongoose.Schema<UserDocument>({
    username:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    role:{
       type: String,
       enum: ['admin', 'customer'],
       required:true
    },
   createdAt:{
        type:Date,
        default: Date.now
    }
})

const user=mongoose.model("userec",userschma);

export default user;
