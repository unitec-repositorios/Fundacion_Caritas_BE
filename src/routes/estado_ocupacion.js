const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/estadoocupacion', (req, res) => {
    const query = "select * from VIEW_ESTADO_OCUPACION";
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

router.post('/api/estadoocupacion', (req, res) => {
    const{ESTADO} = req.body;
    const query = `
        set @ESTADO = ?;
        call CREATE_ESTADO_OCUPACION(@ESTADO);
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

router.put('/api/estadoocupacion/:ID', (req, res) => {
    const{ID} = req.params;
    const{ESTADO} = req.body;
    const query = `
        set @ID = ?;
        set @ESTADO = ?;
        call UPDATE_ESTADO_OCUPACION(@ID,@ESTADO);
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

router.delete('/api/estadoocupacion/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_ESTADO_OCUPACION(@ID);
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