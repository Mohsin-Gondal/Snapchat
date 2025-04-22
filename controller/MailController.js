const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use another service like 'smtp.mailtrap.io', etc.
  auth: {
    user: '23014198165.uog.edu.pk@gmail.com', // Your email address
    pass: 'mlqu uoax iotw akkv',  // Your email password or app-specific password (for Gmail)
  },
});
module.exports = transporter;

