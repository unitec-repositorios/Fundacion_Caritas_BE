const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/tratamiento', (req, res) => {
    const query = "select * from VIEW_TRATAMIENTO";
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

router.post('/api/tratamiento', (req, res) => {
    const{TRATA} = req.body;
    const query = `
        set @TRATA = ?;
        call CREATE_TRATAMIENTO(@TRATA);
    `;
    mySqlConnection.query(query,[TRATA],(error,fields)=>{
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

router.put('/api/tratamiento/:ID', (req, res) => {
    const{ID} = req.params;
    const{TRATA} = req.body;
    const query = `
        set @ID = ?;
        set @ESTADO = ?;
        call UPDATE_TRATAMIENTO(@ID,@TRATA);
    `;
    mySqlConnection.query(query,[ID,TRATA],(error,fields)=>{
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

router.delete('/api/tratamiento/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_TRATAMIENTO(@ID);
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