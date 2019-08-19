const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/caso', (req, res) => {
    const query = "select * from VIEW_CASO";
    mySqlConnection.query(query,(error,result,fields)=>{
        if(!error){
            if(fields.length !==0){
                res.send(result);
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send('Ocurrio un error al obtener')
        }
    });
});

router.post('/api/caso', (req, res) => {
    const{NUMEXP,CANTB,IDUVIO,IDEAT,IDMUNI,IDREMI,IDREC,IDCAUSA,IDTERA,IDPAC,IDCOND} = req.body;
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
        call CREATE_CASO(@NUMEXP,@CANTB,@IDUVIO,@IDEAT,@IDMUNI,@IDREMI,@IDREC,@IDCAUSA,@IDTERA,@IDPAC,@IDCOND);    
        `;
    mySqlConnection.query(query,[NUMEXP,CANTB,IDUVIO,IDEAT,IDMUNI,IDREMI,IDREC,IDCAUSA,IDTERA,IDPAC,IDCOND],(error,fields)=>{
        if(!error){
            if(fields.length!==0){
                res.send('OK');
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send(error)
        }


    });
});

router.put('/api/caso/:ID', (req, res) => {
    const{ID} = req.params;
    const{NUMEXP,CANTB,IDUVIO,IDEAT,IDMUNI,IDREMI,IDREC,IDCAUSA,IDTERA,IDPAC,IDCOND} = req.body;
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
        call UPDATE_CASO(@ID,@NUMEXP,@CANTB,@IDUVIO,@IDEAT,@IDMUNI,@IDREMI,@IDREC,@IDCAUSA,@IDTERA,@IDPAC,@IDCOND);
    `;
    mySqlConnection.query(query,[ID,NUMEXP,CANTB,IDUVIO,IDEAT,IDMUNI,IDREMI,IDREC,IDCAUSA,IDTERA,IDPAC,IDCOND],(error,fields)=>{
        if(!error){
            if(fields.length!==0){
                res.send('OK');
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send(error)
        }


    });
});

router.delete('/api/caso/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_CASO(@ID);
    `;
    mySqlConnection.query(query,[ID],(error,fields)=>{
        if(!error){
            if(fields.length!==0){
                res.send('OK');
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send(error)
        }
    });
});


module.exports = router;