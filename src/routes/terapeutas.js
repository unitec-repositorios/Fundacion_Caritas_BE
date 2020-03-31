const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");

router.get("/api/terapeuta", (req, res) => {
  const query = "select * from VIEW_TERAPEUTA";
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

router.get("/api/terapeuta/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `select * from TERAPEUTA where id_terapeuta=${ID};`;
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

router.post("/api/terapeuta", (req, res) => {
  const { NOMB, COD } = req.body;
  const query = `
        set @NOMB = ?;
        set @COD = ?;
        call CREATE_TERAPEUTA(@NOMB,@COD);
    `;
  mySqlConnection.query(query, [NOMB,COD], (error, fields) => {
    if (!error) {
      if (fields.length !== 0) {
        res.send("OK");
      } else {
        res.send("No hay datos");
      }
    } else {
      res.send(error);
    }
  });
});

router.put("/api/terapeuta/:ID", (req, res) => {
  const { ID } = req.params;
  const { NOMB, COD } = req.body;
  const query = `
        set @ID = ?;
        set @NOMB = ?;
        set @COD = ?;
        call UPDATE_TERAPEUTA(@ID,@NOMB,@COD);
    `;
  mySqlConnection.query(query, [ID, NOMB, COD], (error, fields) => {
    if (!error) {
      if (fields.length !== 0) {
        res.send("OK");
      } else {
        res.send("No hay datos");
      }
    } else {
      res.send(error);
    }
  });
});

router.delete("/api/terapeuta/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
        set @ID = ?;
        call DELETE_TERAPEUTA(@ID);
    `;
  mySqlConnection.query(query, [ID], (error, fields) => {
    if (!error) {
      if (fields.length !== 0) {
        res.send("OK");
      } else {
        res.send("No hay datos");
      }
    } else {
      res.send(error);
    }
  });
});

module.exports = router;
