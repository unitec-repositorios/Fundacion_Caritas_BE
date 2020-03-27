const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");
const numerosALetras = require("numeros_a_letras");

//modificar con procedimiento
router.get("/api/reporte/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `select p.nombres, p.apellidos, c.numero_expediente, r.juez,t.nombre,t.codigo 
  from paciente p join caso c on p.id_paciente= c.id_paciente 
  join terapeuta t on t.id_terapeuta=c.id_terapeuta
  join remision r on r.id_remision=c.id_remision where p.id_paciente=${ID};`;
  mySqlConnection.query(query, [ID], (error, result, fields) => {
    if (!error) {
      if (fields.length !== 0) {
        let data = result[0]; //Result of query to data
        data.fecha = getDateInLetters();
        res.send(data);
      } else {
        res.send("No hay datos");
      }
    } else {
      res.send("Ocurrio un error al obtener");
    }
  });
});

const getDateInLetters = () => {
  let date = new Date();
  let day = date.getDate() + "";
  let month = numerosAMeses(date.getMonth() + 1);
  let year = numerosALetras(date.getFullYear());
  return day + " de " + month.toLowerCase() + " de" + year.toLowerCase();
};

const numerosAMeses = n => {
  if (n + "" == "1") {
    return "ENERO";
  }
  if (n + "" == "2") {
    return "FEBRERO";
  }
  if (n + "" == "3") {
    return "MARZO";
  }
  if (n + "" == "4") {
    return "ABRIL";
  }
  if (n + "" == "5") {
    return "MAYO";
  }
  if (n + "" == "6") {
    return "JUNIO";
  }
  if (n + "" == "7") {
    return "JULIO";
  }
  if (n + "" == "8") {
    return "AGOSTO";
  }
  if (n + "" == "9") {
    return "SEPTIEMBRE";
  }
  if (n + "" == "11") {
    return "NOVIEMBRE";
  }
  if (n + "" == "12") {
    return "DICIEMBRE";
  }

  return "";
};

module.exports = router;
