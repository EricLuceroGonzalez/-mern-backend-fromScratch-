// Servidor en express
const express = require("express");
const app = express();

// Check port
const port = process.env.PORT || 8000;

// import CORS
const cors = require("cors");
app.options("*", cors());
app.use(cors());

// ----------- BODY PARSER  ---------------
var bodyParser = require("body-parser"); // for parsing application/json
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Import the dotenv
var dotenv = require("dotenv");
dotenv.config();

// Import nodemailer
var nodemailer = require("nodemailer");

// Define transporter to login to mail sender account
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.mailUser,
    pass: process.env.mailPass
  }
});

// configure our email details:
const mailOptions = {
  from: process.env.mailUser, // sender address
  to: "ericlucero501@gmail.com", // list of receivers
  subject: "Subject of your email from Nodemail", // Subject line
  html: "<p>Your html here</p>" // plain text body
};
//

// -------------   CRUD  -----------------
app.get("/", (req, res) => {
  res.send("Hello World!!!");
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
});

module.exports = { app, port };
