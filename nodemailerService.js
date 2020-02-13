// Import nodemailer
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "everyday.panama@gmail.com",
    pass: "Lokikolo20*#everyday"
  }
});

// configure our email details:
const mailOptions = {
  from: "everyday.panama@gmail.com", // sender address
  to: "ericlucero501@gmail.com", // list of receivers
  subject: "Subject of your email from Nodemail", // Subject line
  html: "<p>Your html here</p>" // plain text body
};

module.exports = { transporter, mailOptions };
