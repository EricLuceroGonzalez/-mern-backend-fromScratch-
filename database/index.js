// Coneccion con mongo
const mongoose = require("mongoose");

// definir el URI de nuestro mongo con usuario + password + nombre de la db
db_url = process.env.DB_URI;

// Coneccion a Mongo mediante el metodo mongoose.connect()
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (!err) {
    console.log("Conexion exitosa a Mongo DB");
  } else {
    console.log("No se pudo conectar a Mongo DB");
  }
});
// --------------------------