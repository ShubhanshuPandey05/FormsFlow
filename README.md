# FormsFlow

FormsFlow is a powerful and flexible backend system that handles dynamic form submissions, email forwarding, and analytics—ideal for JAMstack sites, contact forms, and custom integrations. It serves as a self-hosted alternative to platforms like Formspree or Getform.

![Node.js](https://img.shields.io/badge/Built%20with-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Express](https://img.shields.io/badge/Framework-Express.js-lightgrey)

## ✨ Features

- 📥 **Dynamic Form Handling** – Accepts form submissions from any frontend.
- 📧 **Email Notifications** – Sends form submissions directly to your inbox.
- 📊 **Submission Analytics** – View submission history and statistics.
- 🔐 **Secure and Customizable** – Supports user authentication and scoped access.
- ⚙️ **Multiple Mailbox Support** – Add and manage multiple email addresses for different forms.
- 🚀 **Developer Friendly** – Built with Express, MongoDB, and modular architecture.

## 📁 Project Structure

\`\`\`
FormsFlow/
├── controllers/
├── models/
├── routes/
├── utils/
├── config/
└── server.js
\`\`\`

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/ShubhanshuPandey05/FormsFlow.git
cd FormsFlow
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
JWT_SECRET=your_jwt_secret
\`\`\`

> 💡 Tip: Use environment-specific values and never commit `.env` files.

### 4. Start the Server

\`\`\`bash
npm start
\`\`\`

The server should now be running at `http://localhost:5000`.

## 📦 API Endpoints

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| POST   | `/api/form/submit`    | Submit a form                      |
| GET    | `/api/form/:formId`   | Get submissions for a form         |
| POST   | `/api/auth/register`  | Register a new user                |
| POST   | `/api/auth/login`     | Log in a user and get JWT          |
| POST   | `/api/email/add`      | Add a new email ID to receive forms |

_(More detailed API documentation coming soon)_

## 🛡️ Security

- Passwords hashed using **bcrypt**
- Email credentials stored via **environment variables**
- Protected routes using **JWT authentication**

## 🛠️ Technologies Used

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **Nodemailer**
- **JWT Authentication**
- **dotenv**

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

> Built with ❤️ by [Shubhanshu Pandey](https://github.com/ShubhanshuPandey05)