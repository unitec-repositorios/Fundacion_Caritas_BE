const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/ubicacionviolencia', (req, res) => {
    const query = "select * from VIEW_UBICACION_VIOLENCIA";
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

router.post('/api/ubicacionviolencia', (req, res) => {
    const{UVIOLENCIA} = req.body;
    const query = `
        set @UVIOLENCIA = ?;
        call CREATE_UBICACION_VIOLENCIA(@UVIOLENCIA);
    `;
    mySqlConnection.query(query,[UVIOLENCIA],(error,fields)=>{
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

router.put('/api/ubicacionviolencia/:ID', (req, res) => {
    const{UVIOLENCIA} = req.body;
    const{ID} = req.params;
    const query = `
    set @ID = ?
    set @UVIOLENCIA = ?;
    call UPDATE_UBICACION_VIOLENCIA(@ID,@UVIOLENCIA);
    `;
    mySqlConnection.query(query,[ID,UVIOLENCIA],(error,fields)=>{
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

router.delete('/api/ubicacionviolencia/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_UBICACION_VIOLENCIA(@ID);
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