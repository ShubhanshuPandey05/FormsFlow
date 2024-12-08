import mongoose from "mongoose";

const mailSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    Forms:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form'
    }]
},{timestamps: true})


const mailToBeSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    Validation_Token: {
        type: String,
        required: true
    }
},{timestamps: true})
const Mail = mongoose.model("Mail",mailSchema);
const MailToBe = mongoose.model("MailToBe",mailToBeSchema);

export { Mail, MailToBe};