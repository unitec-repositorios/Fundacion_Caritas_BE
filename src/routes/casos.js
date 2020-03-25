const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");

router.get("/api/caso", (req, res) => {
  const query = "select * from VIEW_CASO";
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

router.get("/api/caso/detail/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
    select * from view_caso where id_paciente=${ID};
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

router.get("/api/caso/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
        set @ID = ?;
        call DATOS_CASO(@ID);
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

router.post("/api/caso", (req, res) => {
  const {
    NUMEXP,
    CANTB,
    IDUVIO,
    IDEAT,
    IDMUNI,
    IDREMI,
    IDREC,
    IDCAUSA,
    IDTERA,
    IDPAC,
    IDCOND,
    IDTRATA
  } = req.body;
  const query = `
        set @NUMEXP = ?;
        set @CANTB = ?;
        set @IDUVIO = ?;
        set @IDEAT = ?;
        set @IDMUNI = ?;
        set @IDREMI = ?;
        set @IDREC = ?;
        set @IDCAUSA = ?;
        set @IDTERA = ?;
        set @IDPAC = ?;
        set @IDCOND = ?;
        set @IDTRATA = ?;
        call CREATE_CASO(@NUMEXP,@CANTB,@IDUVIO,@IDEAT,@IDMUNI,@IDREMI,@IDREC,@IDCAUSA,@IDTERA,@IDPAC,@IDCOND,@IDTRATA);    
        `;
  mySqlConnection.query(
    query,
    [
      NUMEXP,
      CANTB,
      IDUVIO,
      IDEAT,
      IDMUNI,
      IDREMI,
      IDREC,
      IDCAUSA,
      IDTERA,
      IDPAC,
      IDCOND,
      IDTRATA
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

router.put("/api/caso/update/:ID", (req, res) => {
  try {
    const { ID } = req.params;
    const { EA } = req.body;
    const query = `UPDATE caso SET id_estadoa =${EA} WHERE id_caso=${ID};`;
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

router.put("/api/caso/extradata/:ID", (req, res) => {
  try {
    const { ID } = req.params;
    const { tipo_violencia, recursos, causas } = req.body;
    let tipoViolencia = JSON.stringify(tipo_violencia);
    let recur = JSON.stringify(recursos);
    let cau = JSON.stringify(causas);
    const query = `UPDATE caso SET tipo_violencia = '${tipoViolencia}', recursos = '${recur}', causas = '${cau}' WHERE id_paciente = ${ID};`;
    mySqlConnection.query(query, (error, result, fields) => {
      if (!error) {
        res.send("Ok");
      } else {
        res.send(error);
      }
    });
  } catch (err) {
    res.send(err.message);
  }
});

router.put("/api/casoupdate", (req, res) => {
  try {
    const {
      numero_expediente,
      cantidad_beneficiados,
      id_uviolencia,
      id_estadoa,
      id_municipio,
      id_remision,
      id_recursos,
      id_causa,
      id_terapeuta,
      id_paciente,
      id_condicion,
      id_tratamiento
    } = req.body;

    const query = `UPDATE caso SET numero_expediente='${numero_expediente}',
    cantidad_beneficiados=${cantidad_beneficiados},
    id_uviolencia=${id_uviolencia},
    id_estadoa=${id_estadoa},
    id_municipio=${id_municipio},
    id_remision=${id_remision},
    id_recursos=${id_recursos},
    id_causa=${id_causa},
    id_terapeuta=${id_terapeuta},
    id_paciente=${id_paciente},
    id_condicion=${id_condicion},
    id_tratamiento=${id_tratamiento}
      WHERE id_paciente =${id_paciente};`;
    mySqlConnection.query(query, (error, result, fields) => {
      if (!error) {
        res.send("Ok");
      } else {
        res.send(error);
      }
    });
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/api/caso/delete/:ID", (req, res) => {
  try {
    const { ID } = req.params;
    const BORRADO = 0;
    const query = `UPDATE caso SET borrado = ${BORRADO} WHERE id_paciente = ${ID};`;
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

router.put("/api/caso/:ID", (req, res) => {
  const { ID } = req.params;
  const {
    NUMEXP,
    CANTB,
    IDUVIO,
    IDEAT,
    IDMUNI,
    IDREMI,
    IDREC,
    IDCAUSA,
    IDTERA,
    IDPAC,
    IDCOND,
    IDTRATA
  } = req.body;
  const query = `
        set @NUMEXP = ?;
        set @CANTB = ?;
        set @IDUVIO = ?;
        set @IDEAT = ?;
        set @IDMUNI = ?;
        set @IDREMI = ?;
        set @IDREC = ?;
        set @IDCAUSA = ?;
        set @IDTERA = ?;
        set @IDPAC = ?;
        set @IDCOND = ?;
        set @IDTRATA = ?;
        call UPDATE_CASO(@NUMEXP,@CANTB,@IDUVIO,@IDEAT,@IDMUNI,@IDREMI,@IDREC,@IDCAUSA,@IDTERA,@IDPAC,@IDCOND,@IDTRATA);
    `;
  mySqlConnection.query(
    query,
    [
      ID,
      NUMEXP,
      CANTB,
      IDUVIO,
      IDEAT,
      IDMUNI,
      IDREMI,
      IDREC,
      IDCAUSA,
      IDTERA,
      IDPAC,
      IDCOND,
      IDTRATA
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

router.delete("/api/caso/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
        set @ID = ?;
        call DELETE_CASO(@ID);
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

router.delete("/api/caso/paciente/:ID", (req, res) => {
  const { ID } = req.params;
  const query = `
  DELETE FROM CASO WHERE id_paciente =${ID};
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
