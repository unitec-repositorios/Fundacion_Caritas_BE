const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");

router.get("/api/remision", (req, res) => {
  const query = "select * from VIEW_REMISION";
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

router.get("/api/remision/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `select * from remision where id_remision=${ID}`;
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

router.post("/api/remision", (req, res) => {
  const { JUEZ } = req.body;
  const query = `
        set @JUEZ = ?;
        call CREATE_REMISION(@JUEZ);
    `;
  mySqlConnection.query(query, [JUEZ], (error, fields) => {
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

router.put("/api/remision/:ID", (req, res) => {
  const { ID } = req.params;
  const { JUEZ } = req.body;
  const query = `
        set @ID = ?;
        set @JUEZ = ?;
        call UPDATE_REMISION(@ID,@JUEZ);
    `;
  mySqlConnection.query(query, [ID, JUEZ], (error, fields) => {
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

router.delete("/api/remision/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
        set @ID = ?;
        call DELETE_REMISION(@ID);
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
