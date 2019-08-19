const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/recursosmunicipales', (req, res) => {
    const query = "select * from VIEW_RECURSOS_MUNICIPALES";
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

router.post('/api/recursosmunicipales', (req, res) => {
    const{RECURSO} = req.body;
    const query = `
        set @RECURSO = ?;
        call CREATE_RECURSOS_MUNICIPALES(@RECURSO);
    `;
    mySqlConnection.query(query,[RECURSO],(error,fields)=>{
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

router.put('/api/recursosmunicipales/:ID', (req, res) => {
    const{ID} = req.params;
    const{RECURSO} = req.body;
    const query = `
        set @ID = ?;
        set @RECURSO = ?;
        call UPDATE_RECURSOS_MUNICIPALES(@ID,@RECURSO);
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

router.delete('/api/recursosmunicipales/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_RECURSOS_MUNICIPALES(@ID);
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