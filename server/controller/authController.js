import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import { UserToBe } from "../models/userModel.js"
import generateAndSetCookies from "../utils/generateTokens.js";
import { mailer } from "./mailController.js";
import { Mail } from "../models/mailModel.js";

export const signUp = async (req, res) => {
    try {
        const { Email, Password, Name } = req.body;
        let user = await User.findOne({ Email: Email });
        if (user) {
            console.log("sameUser")
            return res.status(400).json({ message: "Email already exists." });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(Password, salt);
        let Otp = Math.floor(Math.random() * (10000 - 1000) + 1000);
        const userToBe = await UserToBe.findOne({ Email: Email });
        if (userToBe) {
            userToBe.Otp = Otp;
            userToBe.Name = Name;
            await userToBe.save();
            const reqq = {
                body: {
                    to: Email, // the recipient's email
                    subject: 'Your OTP Code',
                    text: Otp
                }
            };

            const ress = {
                status: (statusCode) => ({
                    json: (message) => console.log(`Status: ${statusCode}, Message:`, message),
                })
            };

            // Call the mailer function with the mock req and res
            const response = mailer(reqq, ress);
            res.status(200).json({
                _id: userToBe._id,
                email: userToBe.Email,
            })

        }
        else {
            let newUser = new UserToBe({ Email, Password: hashPassword, Otp, Name });
            const reqq = {
                body: {
                    to: Email, // the recipient's email
                    subject: 'Your OTP Code',
                    text: Otp
                }
            };

            const ress = {
                status: (statusCode) => ({
                    json: (message) => console.log(`Status: ${statusCode}, Message:`, message),
                })
            };

            // Call the mailer function with the mock req and res
            const response = mailer(reqq, ress);
            if (newUser || response) {
                await newUser.save();
                let user = await UserToBe.findOne({ Email: Email });
                res.status(200).json({
                    _id: user._id,
                    email: user.Email,
                })
            } else {
                res.status(500).json({ error: 'Invalid userData' });
            }
        }

    } catch (error) {
        console.log("Error in Signup", error);
        res.status(500).json({ error: error.message });
    }
}
export const signUpValidation = async (req, res) => {
    try {
        const { Email, Otp } = req.body;
        const user = await UserToBe.findOne({ Email: Email });
        if (!user) {
            console.log("No User Found")
            return res.status(400).json({ message: "Try again." });
        }
        const Password = user.Password;
        const Name = user.Name;
        const otp = user.Otp
        if (Otp !== otp) {
            console.log("Invalid OTP")
            console.log(otp, Otp);

            return res.status(400).json({ message: "Invalid OTP" });
        }

        let newUser = new User({ Email, Password, Name });
        if (newUser) {
            await newUser.save();
            let userr = await User.findOne({ Email: Email });
            await UserToBe.deleteOne({ _id: user._id });

            const newMail = new Mail({ Email, user: newUser._id });
            await newMail.save();
            const mail = await Mail.findOne({ Email });
            const userrr = await User.findById(newUser._id);
            if (!userrr.Mails) {
                userrr.Mails = [];
            }
            userrr.Mails.push(mail._id);
            await userrr.save();

            const token = generateAndSetCookies(userr._id);
            // console.log(token);
            res.cookie("jwt", token);
            res.status(200).json(userr)
        } else {
            res.status(500).json({ error: 'Invalid userData' });
        }
    } catch (error) {
        console.log("Error in Signup", error);
        res.status(500).json({ error: error.message });
    }
}
export const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        let user = await User.findOne({ Email });

        if (!user) {
            return res.status(404).json({ message: "No User Exists" });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        // Fetch related mail records using Promise.all
        const Mailss = await Promise.all(
            user.Mails.map(async (mailId) => {
                const mail = await Mail.findById(mailId);
                return mail ? mail.Email : null;
            })
        );

        const token = generateAndSetCookies(user._id);
        res.cookie("jwt", token);
        res.status(200).json({
            _id: user._id,
            Email: user.Email,
            Mails: Mailss.filter(email => email !== null) // Filter out any null results in case of missing mail records
        });

    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ error: error.message });
    }
};


export const logOut = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({
            message: "Logout Successfully"
        })
    } catch (error) {
        console.log(error.message, "error in logout");
        res.status(500).json({ error: "internal Server Error" });
    }
}