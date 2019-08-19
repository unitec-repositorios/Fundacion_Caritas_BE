const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/estadocivil', (req, res) => {
    const query = "select * from VIEW_ESTADO_CIVIL";
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

router.post('/api/estadocivil', (req, res) => {
    const{ESTADO} = req.body;
    const query = `
        set @ESTADO = ?;
        call CREATE_ESTADO_CIVIL(@ESTADO);
    `;
    mySqlConnection.query(query,[ESTADO],(error,fields)=>{
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

router.put('/api/estadocivil/:ID', (req, res) => {
    const{ID} = req.params;
    const{ESTADO} = req.body;
    const query = `
        set @ID = ?;
        set @ESTADO = ?;
        call UPDATE_ESTADO_CIVIL(@ID,@ESTADO);
    `;
    mySqlConnection.query(query,[ID,RECURSO],(error,fields)=>{
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

router.delete('/api/estadocivil/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_ESTADO_CIVIL(@ID);
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