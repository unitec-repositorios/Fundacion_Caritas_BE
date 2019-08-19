const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/municipio', (req, res) => {
    const query = "select * from VIEW_MUNICIPIO";
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

router.post('/api/municipio', (req, res) => {
    const{MUNI} = req.body;
    const query = `
        set @MUNI = ?;
        call CREATE_MUNICIPIO(@MUNI);
    `;
    mySqlConnection.query(query,[MUNI],(error,fields)=>{
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

router.put('/api/municipio/:ID', (req, res) => {
    const{ID} = req.params;
    const{MUNI} = req.body;
    const query = `
        set @ID = ?;
        set @RECURSO = ?;
        call UPDATE_MUNICIPIO(@ID,@MUNI);
    `;
    mySqlConnection.query(query,[ID,MUNI],(error,fields)=>{
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

router.delete('/api/municipio/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_MUNICIPIO(@ID);
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