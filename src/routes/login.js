const express = require("express");
const router = express.Router();
const mySqlConnection = require("../database");
const jwt = require('jsonwebtoken');


router.post('/api/signin', (req, res) => {
  try{
    const{username, password} = req.body;
    const query = 'select * from VIEW_USUARIO where usuario = ?' 
    mySqlConnection.query(query,[username],(error,result,fields)=>{
        if(!error){
            if(fields.length !==0){
                if(result.length == 0){
                  res.send('Usuario Incorrecto')
                }else{ 
                  let data = result[0]
                if(password==data.contraseña){
                  jwt.sign({data},'SuperSecRetKey', { expiresIn: "8h" }, (err, token) => {
                    let obj = {rol:data.rol, token:token}
                    res.json(obj);
                });
                }else{
                  res.send('Contraseña Incorrecta')
                }
                
              //  res.send(data);
                }
            }else{
                res.send('No hay datos');
            }
        }else{
            res.send('Ocurrio un error al obtener')
        }
      });
  } catch(error){
    res.send('Usuario Incorrecto')
  }
});



router.use('/secure',function(req, res, next) {
    var token = req.headers['authorization']
    if (!token) {
      res.status(401).send({
        ok: false,
        message: 'Toket inválido'
      })
    }
  
    token = token.replace('Bearer ', '')
  
    jwt.verify(token, 'password', function(err, token) {
      if (err) {
        return res.status(401).send({
          ok: false,
          message: 'Toket inválido'
        });
      } else {
        req.token = token
        next()
      }

    });
  });

module.exports = router;