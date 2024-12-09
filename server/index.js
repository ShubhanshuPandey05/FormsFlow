// server.js
import express from 'express';
import dotenv from "dotenv";
import connectionToDatabase from './database/databaseConnection.js';
import authentication from './routes/auth.js';
import cors from 'cors';
import { mailer } from './controller/mailController.js';
import addMail from './routes/mailRoutes.js'
import addForm from './routes/formRoutes.js'
import sendMail from './routes/sendMailRoutes.js'
import cookieParser from 'cookie-parser';
import { getData } from './controller/commonController.js';


const app = express();
const allowedOrigins = ['http://localhost:5173', 'https://your-production-domain.com'];

app.use(cors(
  // {
  // origin: (origin, callback) => {
  //   if (allowedOrigins.includes(origin) || !origin) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  // credentials: true
// }
));

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));


dotenv.config();

// Configure Nodemailer transport



app.use("/api/auth",authentication)

// Route to send an email
app.use('/api/sendmail', sendMail);
app.use('/api/mail',addMail)
app.use('/api/form',addForm)
app.get('/api/getData',getData)

app.listen(PORT, () => {
  connectionToDatabase();
  console.log(`Server is running on port ${PORT}`);
});
