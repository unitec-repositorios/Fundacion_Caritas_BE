const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/tipocondicion', (req, res) => {
    const query = "select * from VIEW_TIPO_CONDICION";
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

router.post('/api/tipocondicion', (req, res) => {
    const{COND} = req.body;
    const query = `
        set @COND = ?;
        call CREATE_TIPO_CONDICION(@COND);
    `;
    mySqlConnection.query(query,[COND],(error,fields)=>{
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

router.put('/api/tipocondicion/:ID', (req, res) => {
    const{ID} = req.params;
    const{COND} = req.body;
    const query = `
        set @ID = ?
        set @COND = ?;
        call UPDATE_TIPO_CONDICION(@ID,@COND);
    `;
    mySqlConnection.query(query,[ID,COND],(error,fields)=>{
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

router.delete('/api/tipocondicion/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_TIPO_CONDICION(@ID);
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