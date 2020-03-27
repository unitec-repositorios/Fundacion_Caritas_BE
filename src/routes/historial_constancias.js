const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");

router.get("/api/historial/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
    select * from HISTORIAL_CONSTANCIAS where id_paciente = ${ID}
    `;
  mySqlConnection.query(query, [ID], (error, result, fields) => {
    if (!error) {
      if (fields.length !== 0) {
        res.send(result);
      } else {
        res.send("No hay datos");
      }
    } else {
      res.send("Ocurrio un error al obtener");
    }
  });
});

router.post("/api/constancia_creacion/:ID", (req,res) => {
  const { ID } = req.params;
  const {
    num_expediente,
    nombre,
    apellido,
    tipo_constancia,
    comentario,
  } = req.body;
  let date = new Date();
  let fecha = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

const query =`
INSERT INTO HISTORIAL_CONSTANCIAS (num_expediente, nombre, apellido, tipo_constancia, fecha, comentario, id_paciente) 
VALUES ('${num_expediente}','${nombre}','${apellido}','${tipo_constancia}','${fecha}','${comentario}',${ID})
`;
mySqlConnection.query(query, (error,fields)=>{
  if(!error){
      if(fields.length!==0){
          res.send('OK');
      }else{
          res.send('No hay datos');
      }
  }else{
      res.send(error)
  }})
});

router.get("/api/auditoria/paciente/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
    select usuario_creacion, usuario_modifico ,fecha_creacion ,fecha_modificacion from PACIENTE where id_paciente = ${ID}
    `;
  mySqlConnection.query(query, [ID], (error, result, fields) => {
    if (!error) {
      if (fields.length !== 0) {
        res.send(result);
      } else {
        res.send("No hay datos");
      }
    } else {
      res.send("Ocurrio un error al obtener");
    }
  });
});

module.exports = router;
