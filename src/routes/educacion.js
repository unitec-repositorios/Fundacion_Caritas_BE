const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/educacion', (req, res) => {
    const query = "select * from VIEW_EDUCACION";
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

router.post('/api/educacion', (req, res) => {
    const{EDU} = req.body;
    const query = `
        set @EDU = ?;
        call CREATE_EDUCACION(@EDU);
    `;
    mySqlConnection.query(query,[EDU],(error,fields)=>{
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

router.put('/api/educacion/:ID', (req, res) => {
    const{ID} = req.params;
    const{EDU} = req.body;
    const query = `
        set @ID = ?;
        set @EDU = ?;
        call UPDATE_EDUCACION(@ID,@EDU);
    `;
    mySqlConnection.query(query,[ID,EDU],(error,fields)=>{
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

router.delete('/api/educacion/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_EDUCACION(@ID);
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