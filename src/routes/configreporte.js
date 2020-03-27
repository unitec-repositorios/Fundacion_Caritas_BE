const express = require("express");
const router = express.Router();
const fs = require("fs");
let archivo = "./config.txt";

class Utileria {
  constructor(fs) {
    this.fs = fs;
  }

  /**
   * @param {string} archivo ruta relativa o absoluta del archivo a escribir
   * @param {string} contenido Contenido del archivo a escribir.
   * @param {function} funcion que maneja el evento al termino del mismo
   */
  escibir(archivo, contenido, handler) {
    this.fs.writeFile(archivo, contenido, handler);
  }

  /**
   * @param {string} archivo ruta relativa o absoluta del archivo a escribir
   * @param {function} funcion que maneja el evento al termino del mismo
   */
  leer(archivo, handler) {
    this.fs.readFile(archivo, "utf8", handler);
  }
}

router.post("/api/config/savereporte", (req, res) => {
  const { text } = req.body;
  let utils = new Utileria(fs);
  utils.escibir(archivo, text, function(err) {
    if (err) {
      res.send(err);
    } else {
      console.log("Archivo escrito correctamente!");
      res.send("Ok");
    }
  });
});

router.get("/api/config/getreporte", (req, res) => {
  let utils = new Utileria(fs);
  let text = "";
  utils.leer(archivo, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      text = data;
      res.send(text);
    }
  });
});

module.exports = router;
