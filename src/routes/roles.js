const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/roles', (req, res) => {
    const query = "select * from VIEW_ROLES";
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

router.post('/api/roles', (req, res) => {
    const{ROL} = req.body;
    const query = `
        set @ROL = ?;
        call CREATE_ROLES(@ROL);
    `;
    mySqlConnection.query(query,[ROL],(error,fields)=>{
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

router.put('/api/roles/:ID', (req, res) => {
    const{ID} = req.params;
    const{ROL} = req.body;
    const query = `
        set @ID = ?;
        set @ROL = ?;
        call UPDATE_ROLES(@ID,@ROL);
    `;
    mySqlConnection.query(query,[ID,ROL],(error,fields)=>{
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

router.delete('/api/roles/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_ROLES(@ID);
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