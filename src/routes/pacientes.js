const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");

router.get("/api/paciente", (req, res) => {
  const query = "select * from VIEW_PACIENTE";
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

router.get("/api/paciente/:ID", (req, res) => {
  const { ID } = req.params;

  const query = `
    select * from paciente where id_paciente = ${ID}
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
