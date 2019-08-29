const express = require('express');
const router = express.Router();
const mySqlConnection = require('../database');

//modificar con procedimiento
router.get('/api/casotipoviolencia/:ID', (req, res) => {
    const{ID}= req.params;
    const query = `
        set @ID = ?;
        call MOSTRAR_VIOLENCIAxCASO(@ID);
    `;
    mySqlConnection.query(query,[ID],(error,result,fields)=>{
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

router.post('/api/casotipoviolencia', (req, res) => {
    const{IDCASO,IDTVIO} = req.body;
    const query = `
        set @IDCASO = ?;
        set @IDTVIO = ?;
        call CREATE_CASO_TIPO_VIOLENCIA(@IDCASO,@IDTVIO);
    `;
    mySqlConnection.query(query,[IDCASO,IDTVIO],(error,fields)=>{
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

router.put('/api/casotipoviolencia', (req, res) => {
    const{IDCASO,IDTVIO} = req.body;
    const query = `
        set @IDCASO = ?;
        set @IDTVIO = ?;
        call UPDATE_CASO_TIPO_VIOLENCIA(@IDCASO,@IDTVIO);
    `;
    mySqlConnection.query(query,[IDCASO,IDTVIO],(error,fields)=>{
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

router.delete('/api/casotipoviolencia/:IDCASO', (req, res) => {
    const{IDCASO} = req.params;
    const query = `
        set @ID = ?;
        call DELETE_CASO_TIPO_VIOLENCIA(@IDCASO);
    `;
    mySqlConnection.query(query,[IDCASO],(error,fields)=>{
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