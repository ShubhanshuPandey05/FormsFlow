import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    SubmissionLink:{
        type:String,
        required:true,
        unique:true
    },
    EmailId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mail',
        required: true
    },
    Name:{
        type:String,
        required:true,
    },
    AccessToken:{
        type:String,
        required:true
    },
    Total_Submission:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MailData',
    }],
},{timestamps: true})

const Form = mongoose.model("Form",formSchema);

export default Form;