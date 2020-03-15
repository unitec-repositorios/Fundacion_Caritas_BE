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
    const{user,pass,rol} = req.body;
    const query = `
        set @user = ?;
        set @pass = ?;
        set @rol = ?;
        call CREATE_USUARIO(@user,@pass,@rol);
    `;
    mySqlConnection.query(query,[user,pass,rol],(error,result,fields)=>{
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
    const{NUSER,PASS,ROL} = req.body;
    const{USER} = req.params;
    const query = `
        set @USER = ?;
        set @PASS = ?;
        set @NUSER = ?;
        set @ROL = ?;
        call UPDATE_USUARIO(@USER,@PASS,@NUSER,@ROL);
    `;
    mySqlConnection.query(query,[USER,PASS,NUSER,ROL],(error,result,fields)=>{
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