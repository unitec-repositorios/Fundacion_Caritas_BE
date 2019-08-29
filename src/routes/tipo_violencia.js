const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/tipoviolencia', (req, res) => {
    const query = "select * from VIEW_TIPO_VIOLENCIA";
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

router.post('/api/tipoviolencia', (req, res) => {
    const{TIPOV} = req.body;
    const query = `
        set @TIPOV = ?;
        call CREATE_TIPO_VIOLENCIA(@TIPOV);
    `;
    mySqlConnection.query(query,[TIPOV],(error,fields)=>{
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

router.put('/api/tipoviolencia/:ID', (req, res) => {
    const{ID} = req.params;
    const{TIPOV} = req.body;
    const query = `
        set @ID = ?;
        set @TIPOV = ?;
        call UPDATE_TIPO_VIOLENCIA(@ID,@TIPOV);
    `;
    mySqlConnection.query(query,[ID,TIPOV],(error,fields)=>{
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

router.delete('/api/tipoviolencia/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_TIPO_VIOLENCIA(@ID);
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