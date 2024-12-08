import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        minLength: 6
    },
    Mails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mail"
    }]
}, { timestamps: true });


const userToBeSchema = new mongoose.Schema({
    Otp:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        minLength:6
    }
},{timestamps: true})
const User = mongoose.model("User",userSchema);
const UserToBe = mongoose.model("UserToBe",userToBeSchema);

export {User,UserToBe};