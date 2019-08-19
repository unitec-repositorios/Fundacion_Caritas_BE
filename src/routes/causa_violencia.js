const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

router.get('/api/causaviolencia', (req, res) => {
    const query = "select * from VIEW_CAUSA_VIOLENCIA";
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

router.post('/api/causaviolencia', (req, res) => {
    const{CAUSA} = req.body;
    const query = `
        set @CAUSA = ?;
        call CREATE_CAUSA_VIOLENCIA(@CAUSA);
    `;
    mySqlConnection.query(query,[CAUSA],(error,fields)=>{
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

router.put('/api/causaviolencia/:ID', (req, res) => {
    const{ID} = req.params;
    const{CAUSA} = req.body;
    const query = `
        set @ID = ?;
        set @CAUSA = ?;
        call UPDATE_CAUSA_VIOLENCIA(@ID,@CAUSA);
    `;
    mySqlConnection.query(query,[ID,CAUSA],(error,fields)=>{
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

router.delete('/api/causaviolencia/:ID', (req, res) => {
    const{ID} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_CAUSA_VIOLENCIA(@ID);
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