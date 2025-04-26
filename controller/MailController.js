const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use another service like 'smtp.mailtrap.io', etc.
  auth: {
    user: process.env.USER, // Your email address
    pass: process.env.PASS,  // Your email password or app-specific password (for Gmail)
  },
});
module.exports = transporter;

