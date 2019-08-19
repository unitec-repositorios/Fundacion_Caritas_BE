const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

//get all users
router.get('/api/usuarios', (req, res) => {
    const query = "select * from VIEW_USUARIO"
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
//get usuario por id
router.get('/api/usuarios/:usuario', (req, res) => {
    const{usuario} = req.params;
    const query = 'select * from VIEW_USUARIO where usuario = ?'
    mySqlConnection.query(query,[usuario],(error,result,fields)=>{
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

router.post('/api/usuarios', (req, res) => {
    const{user,pass} = req.body;
    const query = `
        set @user = ?;
        set @pass = ?;
        call CREATE_USUARIO(@user,@pass);
    `;
    mySqlConnection.query(query,[user,pass],(error,result,fields)=>{
        if(!error){
            if(fields.length!==0){
                res.send(result);
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send(error)
        }


    });
});

router.put('/api/usuarios/:USER', (req, res) => {
    const{NUSER,PASS} = req.body;
    const{USER} = req.params;
    const query = `
        set @USER = ?;
        set @PASS = ?;
        set @NUSER = ?;
        call UPDATE_USUARIO(@USER,@PASS,@NUSER);
    `;
    mySqlConnection.query(query,[USER,PASS,NUSER],(error,result,fields)=>{
        if(!error){
            if(fields.length!==0){
                res.send(result);
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send(error)
        }
    });
});

router.delete('/api/usuarios/:USER', (req, res) => {
    const{USER} = req.params;
    const query = `
        set @USER = ?;
        call DELETE_USUARIO(@USER);
    `;
    mySqlConnection.query(query,[USER],(error,result,fields)=>{
        if(!error){
            if(fields.length!==0){
                res.send(result);
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send(error)
        }
    });
});


module.exports = router;