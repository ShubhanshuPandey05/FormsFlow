import mongoose from "mongoose";

const mailDataSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true,
    },
    text:{
        type: Map,
        of: String,
        required:true
    }
},{timestamps: true})

const MailData = mongoose.model("MailData",mailDataSchema);

export default MailData;