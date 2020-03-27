const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");

router.get("/api/paciente", (req, res) => {
  const query =
    "select id_paciente, identidad, nombres, apellidos, edad, genero, oficio, id_estadoc, id_estado, id_educacion, id_departamento, borrado from PACIENTE";
  mySqlConnection.query(query, (error, result, fields) => {
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

router.post("/api/paciente_creacion/:ID", (req,res) => {
  const { ID } = req.params;
  const { usuario } = req.body;

  let date = new Date();
  let fecha = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  const query =`
  UPDATE PACIENTE SET fecha_creacion = '${fecha}', usuario_creacion = '${usuario}' WHERE id_paciente = ${ID}
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

router.post("/api/paciente_modificacion/:ID", (req,res) => {
  const { ID } = req.params;
  const { usuario } = req.body;

  let date = new Date();
  let fecha = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  const query =`
  UPDATE PACIENTE SET fecha_modificacion = '${fecha}', usuario_modifico = '${usuario}' WHERE id_paciente = ${ID}
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



router.get("/api/paciente/:ID", (req, res) => {
  const { ID } = req.params;

  const query = `
    select * from PACIENTE where id_paciente = ${ID}
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

router.post("/api/paciente", (req, res) => {
  const {
    IDEN,
    NOMB,
    APELL,
    EDAD,
    GENERO,
    OFICIO,
    ESTADOCIVIL,
    REMUNERA,
    EDUACION,
    DEP
  } = req.body;
  const query = `
        set @IDEN = ?;
        set @NOMB = ?;
        set @APELL = ?;
        set @EDAD = ?;
        set @GENERO = ?;
        set @OFICIO = ?;
        set @ESTADOCIVIL = ?;
        set @REMUNERA = ?;
        set @EDUACION = ?;
        set @DEP = ?;
        call CREATE_PACIENTE(@IDEN,@NOMB,@APELL,@EDAD,@GENERO,@OFICIO,@ESTADOCIVIL,@REMUNERA,@EDUACION,@DEP);
        select LAST_INSERT_ID() as IDPACIENTE;
    `;
  mySqlConnection.query(
    query,
    [
      IDEN,
      NOMB,
      APELL,
      EDAD,
      GENERO,
      OFICIO,
      ESTADOCIVIL,
      REMUNERA,
      EDUACION,
      DEP
    ],
    (error, result, fields) => {
      if (!error) {
        if (fields.length !== 0) {
          const id_paciente = result.pop();
          res.send(id_paciente);
        } else {
          res.send("No hay datos");
        }
      } else {
        res.send(error);
      }
    }
  );
});

router.put("/api/paciente/update/:ID", (req, res) => {
  try {
    const { ID } = req.params;
    const {
      identidad,
      nombres,
      apellidos,
      edad,
      genero,
      oficio,
      id_estadoc,
      id_estado,
      id_educacion,
      id_departamento
    } = req.body;
    const query = `UPDATE PACIENTE SET identidad = '${identidad}', nombres = '${nombres}', apellidos = '${apellidos}', edad = ${edad}, genero = '${genero}', oficio = '${oficio}', id_estadoc = ${id_estadoc}, id_estado = ${id_estado}, id_educacion = ${id_educacion}, id_departamento = ${id_departamento} WHERE id_paciente = ${ID};`;
    mySqlConnection.query(query, (error, result, fields) => {
      if (!error) {
        res.send("Ok");
      } else {
        res.send("Error");
      }
    });
  } catch (err) {
    res.send(err.message);
  }
});

router.put("/api/paciente/:ID", (req, res) => {
  const { ID } = req.params;
  const {
    IDEN,
    NOMB,
    APELL,
    EDAD,
    GENERO,
    OFICIO,
    ESTADOCIVIL,
    REMUNERA,
    EDUACION,
    DEP
  } = req.body;
  const query = `
        set @ID = ?;
        set @IDEN = ?;
        set @NOMB = ?;
        set @APELL = ?;
        set @EDAD = ?;
        set @GENERO = ?;
        set @OFICIO = ?;
        set @ESTADOCIVIL = ?;
        set @REMUNERA = ?;
        set @EDUACION = ?;
        set @DEP = ?;
        call UPDATE_PACIENTE(@ID,@IDEN,@NOMB,@APELL,@EDAD,@GENERO,@OFICIO,@ESTADOCIVIL,@REMUNERA,@EDUCACION,@DEP);
    `;
  mySqlConnection.query(
    query,
    [
      ID,
      IDEN,
      NOMB,
      APELL,
      EDAD,
      GENERO,
      OFICIO,
      ESTADOCIVIL,
      REMUNERA,
      EDUACION,
      DEP
    ],
    (error, fields) => {
      if (!error) {
        if (fields.length !== 0) {
          res.send("OK");
        } else {
          res.send("No hay datos");
        }
      } else {
        res.send(error);
      }
    }
  );
});

router.get("/api/paciente/delete/:ID", (req, res) => {
  try {
    const { ID } = req.params;
    const BORRADO = 0;
    const query = `UPDATE PACIENTE SET borrado = ${BORRADO} WHERE id_paciente = ${ID};`;
    mySqlConnection.query(query, (error, result, fields) => {
      if (!error) {
        res.send("Ok");
      } else {
        res.send("Error");
      }
    });
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/api/paciente/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
  DELETE FROM PACIENTE WHERE id_paciente =${ID};
    `;
  mySqlConnection.query(query, [ID], (error, fields) => {
    if (!error) {
      res.send("Ok");
    } else {
      res.send(error);
    }
  });
});

module.exports = router;
