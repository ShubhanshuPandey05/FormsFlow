// server.js
import express from 'express';
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectionToDatabase from './database/databaseConnection.js';
import authentication from './routes/auth.js';
import cors from 'cors';
import addMail from './routes/mailRoutes.js'
import addForm from './routes/formRoutes.js'
import sendMail from './routes/sendMailRoutes.js'
import cookieParser from 'cookie-parser';
import { getData } from './controller/commonController.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
// const allowedOrigins = ['http://localhost:5173', 'https://your-production-domain.com', 'http://127.0.0.1:5500'];

app.use(cors({
  origin: ['http://localhost:5173', 'https://your-production-domain.com', 'http://127.0.0.1:5500'],
  credentials: true
}));

app.options('*', cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client', 'dist')));


dotenv.config();





app.use("/api/auth", authentication)

// Route to send an email
app.use('/api/sendmail', sendMail);
app.use('/api/mail', addMail)
app.use('/api/form', addForm)
app.get('/api/getData', getData)
app.get('/ping', (req, res) => {
  res.send("FormsFlow Api")
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


function pingServer() {
  fetch('https://fifth-season-decor-order-app-4s37.onrender.com')
      .then(response => {
          if (response.ok) {
              // console.log('Server is reachable');
          } else {
              console.error('Server responded with an error:', response.status);
          }
      })
      .catch(error => {
          console.error('Error pinging the server:', error);
      });

  fetch('https://jsrprime-order-app.onrender.com')
      .then(response => {
          if (response.ok) {
              // console.log('Server is reachable');
          } else {
              console.error('Server responded with an error:', response.status);
          }
      })
      .catch(error => {
          console.error('Error pinging the server:', error);
      });

  fetch('https://avinya-exim.onrender.com/ping')
      .then(response => {
          if (response.ok) {
              // console.log('Server is reachable');
          } else {
              console.error('Server responded with an error:', response.status);
          }
      })
      .catch(error => {
          console.error('Error pinging the server:', error);
      });
}

// Ping the server every 30 seconds
setInterval(pingServer, 30000);

app.listen(PORT, () => {
  connectionToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});