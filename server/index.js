// Servidor en express
const express = require("express");
const app = express();

// Import the dotenv
var dotenv = require("dotenv");
dotenv.config();

// Check port
const port = process.env.PORT || 8000;

//

// -------------   CRUD  -----------------
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});



module.exports = { app, port };