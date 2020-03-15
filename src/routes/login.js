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

router.post('/api/login/verificar', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.send(err);
    } else {
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
});

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.send('error2');
  }

}


module.exports = router;