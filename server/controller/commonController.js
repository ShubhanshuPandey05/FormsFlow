import Form from "../models/formModel.js";
import MailData from "../models/mailDataModel.js";
import { Mail } from "../models/mailModel.js";
import { User } from "../models/userModel.js"

export const getData = async (req, res) => {
    try {
      // Use await to get counts
      let totalUser = await User.countDocuments();
      let totalForm = await Form.countDocuments();
      let totalMail = await Mail.countDocuments();
      let totalMailSent = await MailData.countDocuments();

      res.status(201).json({ totalUser, totalForm, totalMail, totalMailSent });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Failed to fetch data", error });
    }
  };
  