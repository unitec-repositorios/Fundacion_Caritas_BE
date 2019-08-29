const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/departamento', (req, res) => {
    const query = "select * from VIEW_DEPARTAMENTO";
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

router.post('/api/departamento', (req, res) => {
    const{DEP} = req.body;
    const query = `
        set @DEP = ?;
        call CREATE_DEPARTAMENTO(@DEP);
    `;
    mySqlConnection.query(query,[DEP],(error,fields)=>{
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

router.put('/api/departamento/:ID', (req, res) => {
    const{ID} = req.params;
    const{DEP} = req.body;
    const query = `
        set @ID = ?;
        set @DEP = ?;
        call UPDATE_DEPARTAMENTO(@ID,@DEP);
    `;
    mySqlConnection.query(query,[ID,DEP],(error,fields)=>{
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

router.delete('/api/departamento/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_DEPARTAMENTO(@ID);
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