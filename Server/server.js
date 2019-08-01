var express = require('express');
var app = express();
var db = require('./database.js');
const router = express.Router();


//var PORT = 'https://apicaritas.herokuapp.com';

app.set('port',process.env.PORT || 8000);

app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en %PORT%'.replace('%PORT%',app.get('port')))
});

app.use((req, res, next) => {
    /*res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');*/
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
});

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});


app.get('/',(req,res,next)=>{
	res.json({
	"Mensaje": "ok"
	})
})

/*Division de los obtener*/
//Obteniene todos los pacientes
app.get('/api/paciente',(req, res , next)=>{
    var sql = 'SELECT identidad as Id, nombreC as Nombre, edad as Edad ,genero as Genero, estado_civil as Estado, oficio as Oficio FROM PACIENTES';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtiene todos los casos 
app.get('/api/casos',(req, res , next)=>{
    var sql = 'select cas.id_caso as IDCaso,cas.identidad as ID, vio.tipo_violencia as Violencia ,rm.tipo_juez as Juez, cn.tipo_condicion as Condicion, cv.causa as Causa, uv.ubicacion as Ubicacion, rcm.tipo as Tipo, st.tipo_estado as Estado from CASOS cas INNER join tipo_violencia vio on cas.id_tipov = vio.id_violencia inner join REMISION rm on cas.id_remision = rm.id_juez inner join tipo_condicion cn on cas.id_cond = cn.id_condicion inner join CVIOLENCIA cv on cas.id_cvio = cv.id_causa inner join UVIOLENCIA uv on cas.id_uvio = uv.id_uvio inner join RMUNICIPALES rcm on cas.id_rmun = rcm.id_recursos INNER join ESTADO_ATENCION st on cas.id_eaten = st.id_estado';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtiene los casos por id de la persona
app.get('/api/casos/:id',(req, res , next)=>{
    var sql = 'select cas.id_caso as IDCaso,cas.identidad as ID, vio.tipo_violencia as Violencia ,rm.tipo_juez as Juez, cn.tipo_condicion as Condicion, cv.causa as Causa, uv.ubicacion as Ubicacion, rcm.tipo as Tipo, st.tipo_estado as Estado from CASOS cas INNER join tipo_violencia vio on cas.id_tipov = vio.id_violencia inner join REMISION rm on cas.id_remision = rm.id_juez inner join tipo_condicion cn on cas.id_cond = cn.id_condicion inner join CVIOLENCIA cv on cas.id_cvio = cv.id_causa inner join UVIOLENCIA uv on cas.id_uvio = uv.id_uvio inner join RMUNICIPALES rcm on cas.id_rmun = rcm.id_recursos INNER join ESTADO_ATENCION st on cas.id_eaten = st.id_estado where cas.identidad = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtinen pacientes por Id
app.get('/api/paciente/:id',(req,res,next)=>{ 
    var sql = 'SELECT identidad as Id, nombreC as Nombre, edad as Edad ,genero as Genero, estado_civil as Estado, oficio as Oficio FROM PACIENTES where identidad = ?';
    var params = [req.params.id];
    db.get(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(row);
    });
});
//obtiene datos extras por un paciente
app.get('/api/paciente/personal/:id',(req,res,next)=>{ 
    var sql = 'SELECT id_educacion as IdEdu , id_municipio as IdMun, id_terapeuta as IdTera, id_eocp as IdEO FROM PACIENTES where identidad = ?';
    var params = [req.params.id];
    db.get(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(row);
    });
});

//obtener causa de violencia
app.get('/api/cviolencia',(req, res , next)=>{
    var sql = 'SELECT id_causa as Id , causa as Causa FROM CVIOLENCIA';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener educacion
app.get('/api/educacion',(req, res , next)=>{
    var sql = 'SELECT id_educacion as Id, nivel_educativo as Nivel FROM EDUCACION';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener estado ocupacion
app.get('/api/eocupacion',(req, res , next)=>{
    var sql = 'SELECT id_eocp as Id, tipo as Tipo FROM EOCUPACION';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener estado de atencion
app.get('/api/estadoatencion',(req, res , next)=>{
    var sql = 'SELECT id_estado as Id , tipo_estado as Estado FROM ESTADO_ATENCION';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener municipios
app.get('/api/municipios',(req, res , next)=>{
    var sql = 'SELECT id_municipio as Id, nombre_municipio as Municipio FROM MUNICIPIOS';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener remision
app.get('/api/remision',(req, res , next)=>{
    var sql = 'SELECT id_juez as Id, tipo_juez as Juez FROM REMISION';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener recursos municipales
app.get('/api/recmunicipios',(req, res , next)=>{
    var sql = 'SELECT id_recursos as Id, tipo as Tipo FROM RMUNICIPALES';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener el terapeuta
app.get('/api/terapeuta',(req, res , next)=>{
    var sql = 'SELECT id_terapeuta as Id, nombreC as Nombre FROM TERAPEUTA';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener tipo de condicion
app.get('/api/condicion',(req, res , next)=>{
    var sql = 'SELECT id_condicion as Id, tipo_condicion as Condicion FROM TIPO_CONDICION';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener el tipo de violencia
app.get('/api/tipoviolencia',(req, res , next)=>{
    var sql = 'SELECT id_violencia as Id, tipo_violencia as TV FROM TIPO_VIOLENCIA';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener ubicacion de violencia
app.get('/api/ubicacionvio',(req, res , next)=>{
    var sql = 'SELECT id_uvio as Id, ubicacion as Ubicacion FROM UVIOLENCIA';
    var params = [];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

//obtener contraseña basada en el usuario
app.get('/api/usuario/:user',(req, res , next)=>{
    var sql = 'SELECT password as Contraseña FROM USUARIOS WHERE nombre_usuario = ?';
    var params = [req.params.user];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json(rows);
    });
});

/* Division para Ingresar*/
//Ingresar Pacientes
app.post('/api/paciente/:id/:Nom/:Ed/:Gen/:Est/:Of/:Edu/:Mun/:Ter/:Eoc',(req,res,next)=>{
    var sql = "INSERT into PACIENTES VALUES (?,?,?,?,?,?,?,?,?,?)";
    var params = [req.params.id ,req.params.Nom , 
        req.params.Ed,req.params.Gen,
        req.params.Est,req.params.Of,
        req.params.Edu,req.params.Mun,req.params.Ter,
        req.params.Eoc];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar Remision
app.post('/api/remision/:tipo',(req,res,next)=>{
    var sql = 'INSERT INTO REMISION values (null,?)';
    var params = [req.params.tipo];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar Casos
app.post('/api/casos/:num/:id/:remi/:tvio/:cond/:causa/:ubi/:rmun/:estado/:cb',(req,res,next)=>{
    var sql = 'INSERT INTO CASOS values (null,?,?,?,?,?,?,?,?,?,?)';
    var params = [req.params.num,req.params.id,req.params.remi,
        req.params.tvio,req.params.cond,req.params.causa,
        req.params.ubi,req.params.rmun,req.params.estado,req.params.cb];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar causa de violencia
app.post('/api/cviolencia/:causa',(req,res,next)=>{
    var sql = 'INSERT INTO CVIOLENCIA values (null,?)';
    var params = [req.params.causa];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar educacion
app.post('/api/educacion/:edu',(req,res,next)=>{
    var sql = 'INSERT INTO EDUCACION values (null,?)';
    var params = [req.params.edu];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar Estado ocupacion
app.post('/api/eocupacion/:tipo',(req,res,next)=>{
    var sql = 'INSERT INTO EOCUPACION values (null,?)';
    var params = [req.params.tipo];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar Municipios
app.post('/api/municipios/:muni',(req,res,next)=>{
    var sql = 'INSERT INTO MUNICIPIOS values (null,?)';
    var params = [req.params.muni];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar recursos municipales
app.post('/api/recmunicipios/:rec',(req,res,next)=>{
    var sql = 'INSERT INTO RMUNICIPALES values (null,?)';
    var params = [req.params.rec];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar Terapeuta
app.post('/api/terapeuta/:nom',(req,res,next)=>{
    var sql = 'INSERT INTO TERAPEUTA values (null,?)';
    var params = [req.params.nom];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar Tipo de condicion
app.post('/api/condicion/:con',(req,res,next)=>{
    var sql = 'INSERT INTO TIPO_CONDICION values (null,?)';
    var params = [req.params.con];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar tipo de violencia
app.post('/api/tipoviolencia/:tipo',(req,res,next)=>{
    var sql = 'INSERT INTO TIPO_VIOLENCIA values (null,?)';
    var params = [req.params.tipo];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar Usuarios
app.post('/api/usuario/:usu/:con',(req,res,next)=>{
    var sql = 'INSERT INTO USUARIOS values (?,?)';
    var params = [req.params.usu, req.params.con];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Ingresar ubicacion de violencia
app.post('/api/ubicacionvio/:ubi',(req,res,next)=>{
    var sql = 'INSERT INTO UVIOLENCIA values (null,?)';
    var params = [req.params.ubi];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

/*Division para actualizar*/
//Modificar Caso
app.put('/api/casos/:ide/:num/:id/:remi/:tvio/:cond/:causa/:ubi/:rmun/:estado/:cb',(req,res,next)=>{
    var sql = 'UPDATE CASOS SET numero_expediente = ? , identidad = ?, id_remision = ?, id_tipov = ? , id_cond = ?, id_cvio = ?, id_uvio = ?, id_rmun = ?, id_eaten = ?, cantidad_benef = ? WHERE id_caso = ?';
    var params = [req.params.num,req.params.id,req.params.remi,
        req.params.tvio,req.params.cond,req.params.causa,
        req.params.ubi,req.params.rmun,req.params.estado,req.params.cb,req.params.ide];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//modficar pacientes
app.put('/api/paciente/:id/:Nom/:Ed/:Gen/:Est/:Of/:Edu/:Mun/:Ter/:Eoc',(req,res,next)=>{
    var sql = "UPDATE PACIENTES set identidad = ?, nombreC = ?, edad = ?, genero = ?, estado_civil = ?, oficio = ?, id_educacion = ?, id_municipio = ?, id_terapeuta = ?, id_eocp = ? where identidad = ?";
    var params = [req.params.id ,req.params.Nom , 
        req.params.Ed,req.params.Gen,
        req.params.Est,req.params.Of,
        req.params.Edu,req.params.Mun,req.params.Ter,
        req.params.Eoc,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar Causa de violencia
app.put('/api/cviolencia/:id/:causa',(req,res,next)=>{
    var sql = 'UPDATE CVIOLENCIA SET causa = ? WHERE id_causa = ?';
    var params = [req.params.causa,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar Educacion
app.put('/api/educacion/:id/:edu',(req,res,next)=>{
    var sql = 'UPDATE EDUCACION SET nivel_educativo = ? where id_educacion = ?';
    var params = [req.params.edu,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificara Estado de ocupacion
app.put('/api/eocupacion/:id/:tipo',(req,res,next)=>{
    var sql = 'UPDATE EOCUPACION SET tipo = ? where id_eocp = ?';
    var params = [req.params.tipo, req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar municipios
app.put('/api/municipios/:id/:muni',(req,res,next)=>{
    var sql = 'UPDATE MUNICIPIOS SET nombre_municipio = ? where id_municipio = ?';
    var params = [req.params.muni,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar recursos municipales
app.put('/api/recmunicipios/:id/:rec',(req,res,next)=>{
    var sql = 'UPDATE RMUNICIPALES SET tipo = ? where id_recursos = ? ';
    var params = [req.params.rec,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar Terapeuta
app.put('/api/terapeuta/:id/:nom',(req,res,next)=>{
    var sql = 'UPDATE TERAPEUTA SET nombreC = ? where id_terapeuta = ?';
    var params = [req.params.nom,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//modificar Tipo de condicion
app.put('/api/condicion/:id/:con',(req,res,next)=>{
    var sql = 'UPDATE TIPO_CONDICION SET tipo_condicion = ? where id_condicion = ?';
    var params = [req.params.con,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar tipo de violencia
app.put('/api/tipoviolencia/:id/:tipo',(req,res,next)=>{
    var sql = 'UPDATE TIPO_VIOLENCIA SET tipo_violencia = ? where id_violencia = ?';
    var params = [req.params.tipo,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar Usuarios
app.put('/api/usuario/:usu/:con',(req,res,next)=>{
    var sql = 'UPDATE USUARIOS SET nombre_usuario = ?, password = ? where nombre_usuario = ?';
    var params = [req.params.usu, req.params.con, req.params.usu];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

//Modificar ubicacion de violencia
app.put('/api/ubicacionvio/:id/:ubi',(req,res,next)=>{
    var sql = 'UPDATE UVIOLENCIA SET ubicacion = ? where id_uvio = ?';
    var params = [req.params.ubi,req.params.id];
    console.log(params)
    db.run(sql,params,(err,row)=>{
        if(err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "Mensaje:": "Se Ingreso Exitosamente"
        });
    });
});

/*Division de eliminar*/
//eliminar paciente
app.delete('/api/paciente/:id',(req, res , next)=>{
    var sql = 'DELETE FROM PACIENTES WHERE identidad = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar Casos 
app.delete('/api/casos/:id',(req, res , next)=>{
    var sql = 'DELETE FROM CASOS WHERE id_caso = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar causa de violencia
app.delete('/api/cviolencia/:id',(req, res , next)=>{
    var sql = 'DELETE FROM CVIOLENCIA where id_causa = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar educacion
app.delete('/api/educacion/:id',(req, res , next)=>{
    var sql = 'DELETE FROM EDUCACION where id_educacion = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar estado ocupacion
app.delete('/api/eocupacion/:id',(req, res , next)=>{
    var sql = 'DELETE FROM EOCUPACION where id_eocp = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar estado de atencion
app.delete('/api/estadoatencion/:id',(req, res , next)=>{
    var sql = 'DELETE FROM ESTADO_ATENCION WHERE id_estado = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar municipios
app.delete('/api/municipios/:id',(req, res , next)=>{
    var sql = 'DELETE FROM MUNICIPIOS WHERE id_municipio = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar remision
app.delete('/api/remision/:id',(req, res , next)=>{
    var sql = 'DELETE FROM REMISION where id_juez = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar recursos municipales
app.delete('/api/recmunicipios/:id',(req, res , next)=>{
    var sql = 'DELETE FROM RMUNICIPALES where id_recursos = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar el terapeuta
app.delete('/api/terapeuta/:id',(req, res , next)=>{
    var sql = 'DELETE FROM TERAPEUTA WHERE id_terapeuta = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//eleminar tipo de condicion
app.delete('/api/condicion/:id',(req, res , next)=>{
    var sql = 'DELETE FROM TIPO_CONDICION WHERE id_condicion = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//eliminar el tipo de violencia
app.delete('/api/tipoviolencia/:id',(req, res , next)=>{
    var sql = 'DELETE FROM TIPO_VIOLENCIA WHERE id_violencia = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

//Eliminar ubicacion de violencia
app.delete('/api/ubicacionvio/:id',(req, res , next)=>{
    var sql = 'DELETE FROM UVIOLENCIA WHERE id_uvio = ?';
    var params = [req.params.id];
    db.all(sql,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error": err.message})
        }
        res.json({
            "Mensaje": "Eliminado Exitosamente"
        });
    });
});

app.use( (req,res) => {
    res.sendStatus(404);
});
