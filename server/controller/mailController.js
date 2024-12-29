import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import { Mail, MailToBe } from '../models/mailModel.js';
import { User } from '../models/userModel.js';
import Form from '../models/formModel.js';
import MailData from '../models/mailDataModel.js';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
export const mailer = (req, res) => {
    const { to, subject, text } = req.body;


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: `
            <html>

<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            text-align: center;
            background-color: #007bff;
            color: white;
            padding: 15px;
            border-radius: 10px 10px 0 0;
        }

        .email-body {
            padding: 20px;
            text-align: left;
            color: #333;
        }

        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            padding: 10px;
            border-top: 1px solid #e0e0e0;
        }

        .cta-button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }
        #otp {
        display: flex;
        width: fit-content;
        padding: 20px 0;
        font-size: 40px;
        margin: auto;
    }

    .otp-box {
        padding: 5px 20px;
        display: flex;
        border: 1px solid #adaaaa;
        border-radius: 5px;
        font-weight: bold;
        color: #333;
        box-sizing: border-box;
        margin: 5px;
    }
        #confirm-mail-box{
            display: flex;
            font-size: large;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Welcome to Our Service!</h2>
        </div>
        <div class="email-body">
            <p>Hello,</p>
            <p>Thank you for signing up with us! We are excited to have you on board.</p>
            <p>To get started, Here is OTP for your sign up Process:</p>
        </div>
        <div id="otp">
    ${String(text)
                .split("")
                .map((char) => `<div class="otp-box">${char}</div>`)
                .join("")}
</div>

        <div class="email-footer">
            <p>If you did not sign up for this service, please ignore this email.</p>
            <p>Best regards,</p>
            <p>FormsFlow</p>
        </div>
    </div>
</body>

</html>

        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email', error });
        }
        res.status(200).json({ message: 'Email sent successfully', info });
    });
}

export const addMail = async (req, res) => {
    try {
        const { Email: email, authUser } = req.body;

        // Parse authUser if it is a string
        const parsedAuthUser = typeof authUser === "string" ? JSON.parse(authUser) : authUser;

        // Check if parsedAuthUser has _id
        if (!parsedAuthUser || !parsedAuthUser._id) {
            return res.status(400).json({ message: 'authUser._id is missing in the request body' });
        }

        let maill = await Mail.findOne({ Email: email })
        let mailll = await MailToBe.findOne({ Email: email })

        if (maill || mailll) {
            return res.status(500).json({ message: 'This mail is alredy added' });
        }

        const tempToken = Math.floor(Math.random() * 9000000) + 1000000;
        const tempLink = `${process.env.BASE_LINK}/mail/mailVerification/${tempToken}`;
        console.log(tempLink);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to our website! Follow this link to verify your email',
            html: `
            <html>

<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            text-align: center;
            background-color: #007bff;
            color: white;
            padding: 15px;
            border-radius: 10px 10px 0 0;
        }

        .email-body {
            padding: 20px;
            text-align: left;
            color: #333;
        }

        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            padding: 10px;
            border-top: 1px solid #e0e0e0;
        }

        .cta-button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }
        #otp{
            width: 100%;
            padding: 10px;
            display: flex;
            font-size: 40px;
            justify-content: space-between;
            align-items: center;
            text-align: justify;
            /* text-indent: 40px;  */
        }
        #confirm-mail-box{
            display: flex;
            font-size: large;
            width: fit-content;
            margin: auto;

        }
        #confirm-mail{
            color:white;
        }
        .ii a[href]{
        color:white;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Welcome to Our Service!</h2>
        </div>
        <div class="email-body">
            <p>Hello,</p>
            <p>Thank you for joining with us! We are excited to have you on board.</p>
            <p>To get started, please confirm your email address by clicking the button below:</p>
            <div id="confirm-mail-box">
                <a href="${tempLink}" class="cta-button" id="confirm-mail">Confirm Email</a>
            </div>
        </div>
        <div class="email-footer">
            <p>If you did not add any mail for this service, please ignore this email.</p>
            <p>Best regards,</p>
            <p>FormsFlow</p>
        </div>
    </div>
</body>

</html>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        // Save newMail with the parsed authUser's _id
        const newMail = new MailToBe({ Email: email, Validation_Token: tempToken, user: parsedAuthUser._id });
        await newMail.save();

        const mail = await MailToBe.findOne({ Email: email });
        res.status(200).json({
            _id: mail._id,
            email: mail.Email,
        });
    } catch (error) {
        console.error("Error in addMail function:", error);
        res.status(500).json({ message: 'An error occurred', error });
    }
};





export const mailVerification = async (req, res) => {
    try {
        const token = req.params.token;
        console.log("Token:", token);

        // Find mail data by token
        const data = await MailToBe.findOne({ Validation_Token: token });
        if (!data) {
            return res.status(500).json({ message: 'Error finding mail' });
        }

        const { Email, user: userId } = data;  // Get Email and user ID from data
        console.log(Email, userId);

        // Create and save new mail entry
        const newMail = new Mail({ Email, user: userId });
        await newMail.save();

        // Find the saved mail to get its _id
        const mail = await Mail.findOne({ Email });

        // Find the user by ID from data.user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Ensure Mails array exists, then add the mail ID and save
        if (!user.Mails) {
            user.Mails = [];
        }
        user.Mails.push(mail._id);
        await user.save();
        await MailToBe.deleteOne({ _id: data._id });

        // Redirect directly to a new page
        res.redirect('http://localhost:5173/');
    } catch (error) {
        console.error("Error in mailVerification function:", error);
        res.status(500).json({ message: 'An error occurred', error });
    }
};


export const getMail = async (req, res) => {
    try {
        const { email } = req.body;

        // Find user by email
        const savedUser = await User.findOne({ Email: email });
        if (!savedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Fetch all mails in one go by using the $in operator on the mail IDs
        const mails = await Mail.find({ _id: { $in: savedUser.Mails } });

        // Extract just the Email field from each mail document
        const Mailss = mails.map(mail => mail.Email);

        res.status(200).json({
            Mails: Mailss
        });

    } catch (error) {
        console.error("Error in getMail function:", error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};


export const sendMail = async (req, res) => {
    const formData = req.body;
    // console.log("Received form data:", formData);

    const accessToken = req.params.accesstoken;
    // console.log("Token:", accessToken);

    const savedForm = await Form.findOne({ AccessToken: accessToken });
    if (!savedForm) {
        return res.status(404).json({ message: 'Invalid Link' });
    }

    const mail = await Mail.findOne({ _id: savedForm.EmailId });

    // Format formData into a string
    const formText = `
    <table style="width: 100%; border-collapse: collapse;">
        <tbody>
            ${Object.entries(formData)
            .map(
                ([key, value]) => `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${key}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${value}</td>
                </tr>`
            )
            .join("")}
        </tbody>
    </table>`;


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: mail.Email,
        subject: `New Submission For ${savedForm.Name}`,
        // text: formText || "Your default text content here",
        html: `
            <html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            background-color: #007bff;
            color: white;
            padding: 15px;
            border-radius: 10px 10px 0 0;
        }
        .email-body {
            padding: 20px;
            text-align: left;
            color: #333;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            padding: 10px;
            border-top: 1px solid #e0e0e0;
        }
        .cta-button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Welcome to Our Service!</h2>
        </div>
        <div class="email-body">
            <p>Hello,</p>
            <p>There was new submission for your ${savedForm.Name}</p>
            <p>The following data was given by the user</p>
        </div>
        <div>
            ${formText}
        </div>
        <div class="email-footer">
            <p>Thank you for trusting us.</p>
            <p>Best regards,</p>
            <p>FormsFlow</p>
        </div>
    </div>
</body>
</html>

        `
    };

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: 'Error sending email', error });
        }
        const newMailData = new MailData({ subject: `New Submission For ${savedForm.Name}`, text: formData })
        await newMailData.save()
        const mailData = await MailData.findOne({ subject: `New Submission For ${savedForm.Name}`, text: formData })
        savedForm.Total_Submission.push(mailData._id)
        await savedForm.save();
        res.status(200).sendFile(path.join(__dirname, 'thankyou.html'));
    });
};



export const sendMailWithoutSignUp = async (req, res) => {
    const email = req.params.mail;
    const formData = req.body;
    // console.log("Received form data:", formData);

    // Format formData into a string
    const formText = `
    <table style="width: 100%; border-collapse: collapse;">
        <tbody>
            ${Object.entries(formData)
            .map(
                ([key, value]) => `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${key}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${value}</td>
                </tr>`
            )
            .join("")}
        </tbody>
    </table>`;


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `New Submission For Your Form`,
        // text: formText || "Your default text content here",
        html: `
            <html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            background-color: #007bff;
            color: white;
            padding: 15px;
            border-radius: 10px 10px 0 0;
        }
        .email-body {
            padding: 20px;
            text-align: left;
            color: #333;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            padding: 10px;
            border-top: 1px solid #e0e0e0;
        }
        .cta-button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Welcome to Our Service!</h2>
        </div>
        <div class="email-body">
            <p>Hello,</p>
            <p>There was new submission for your Form</p>
            <p>The following data was given by the user</p>
        </div>
        <div>
            ${formText}
        </div>
        <div class="email-footer">
            <p>Thank you for trusting us.</p>
            <p>Best regards,</p>
            <p>FormsFlow</p>
        </div>
    </div>
</body>
</html>

        `
    };

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: 'Error sending email', error });
        }
        const newMailData = new MailData({ subject: `New Submission`, text: formData })
        await newMailData.save()
        res.status(200).sendFile(path.join(__dirname, 'thankyou.html'));
    });
};
export const sendMailWithoutSignUpCustom = async (req, res) => {
    // console.log("hii");
    const email = req.params.mail;
    const { heading } = req.body;
    const { formData } = req.body;
    const { text } = req.body;
    // console.log("hii1");

    // console.log("Received form data:", formData);

    // Format formData into a string
    const formText = `
    <table style="width: 100%; border-collapse: collapse;">
        <tbody>
            ${Object.entries(formData)
            .map(
                ([key, value]) => `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${key}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${value}</td>
                </tr>`
            )
            .join("")}
        </tbody>
    </table>`;


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `New Submission For Your Form`,
        // text: formText || "Your default text content here",
        html: `
            <html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            background-color: #007bff;
            color: white;
            padding: 15px;
            border-radius: 10px 10px 0 0;
        }
        .email-body {
            padding: 20px;
            text-align: left;
            color: #333;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            padding: 10px;
            border-top: 1px solid #e0e0e0;
        }
        .cta-button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Welcome to Our Service!</h2>
        </div>
        <div class="email-body">
            <p>Hello,</p>
            <p>${heading}</p>
            <p>The following data was given by the user</p>
        </div>
        <div>
            ${formText}
        </div>
        <div>${text}</div>
        <div class="email-footer">
            <p>Thank you for trusting us.</p>
            <p>Best regards,</p>
            <p>FormsFlow</p>
        </div>
    </div>
</body>
</html>

        `,
    };


    // console.log(mailOptions);


    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: 'Error sending email', error });
        }
        const newMailData = new MailData({ subject: `New Submission`, text: formData })
        await newMailData.save()
        res.status(200).sendFile(path.join(__dirname, 'thankyou.html'));
    });
};
