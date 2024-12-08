import Form from "../models/formModel.js";
import MailData from "../models/mailDataModel.js";
import { Mail } from "../models/mailModel.js";

export const addForm = async (req, res) => {
    const { Name, email } = req.body;

    const isMail = await Mail.findOne({ Email: email });

    if (!isMail) {
        return res.status(500).json({ message: "internal server error" });
    }

    console.log(isMail);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';

    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        accessToken += characters[randomIndex];
    }

    const submissionLink = `${process.env.BASE_LINK}/sendmail/${accessToken}`

    const newform = new Form({ Name, EmailId: isMail._id, AccessToken: accessToken, SubmissionLink: submissionLink })
    await newform.save()
    const form = await Form.findOne({ AccessToken: accessToken })
    if (form) {
        isMail.Forms.push(form._id)
        await isMail.save();
        return res.status(200).json({
            message: "Form created successfully",
            form: form
        })
    }
    else {
        return res.status(500).json({ message: "internal server error" })
    }
}

export const getForm = async (req, res) => {
    const { email } = req.body;

    const savedMail = await Mail.findOne({ Email: email });
    if (!savedMail) {
        return res.status(404).json({ message: 'Mail not found' });
    }
    const Formss = await Promise.all(
        savedMail.Forms.map(async (formID) => {
            const mail = await Form.findById(formID);
            return mail ? mail : null;
        })
    );
    res.status(200).json({
        Forms: Formss
    });
}

export const getFormData = async (req, res) => {

    const formName = req.params.name;
    // console.log("Name:", formName);

    const savedForm = await Form.findOne({ Name: formName });
    if (!savedForm) {
        return res.status(404).json({ message: 'Invalid Form' });
    }
    const mailData = await Promise.all(
        savedForm.Total_Submission.map(async (mailDataId) => {
            const mailData = await MailData.findById(mailDataId);
            return mailData ? mailData.text : null;
        })
    );
    const totalSubmission = mailData.length;
    const accessTokken = savedForm.AccessToken;
    const submissionLink = `${process.env.BASE_LINK}/sendmail/${accessTokken}`;
    // console.log(mailData);
    // console.log(accessTokken);
    // console.log(totalSubmission);
    
    res.status(200).json({mailData,submissionLink,totalSubmission})

};