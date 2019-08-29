const express = require('express');
const app = express();
const format = require('./JSON_Scripts/JSON_Formats');

//this is used to solve CORS problem
const cors = require('cors');


//settings
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use(require('./routes/usuarios'));
app.use(require('./routes/ubicacion_violencia'));
app.use(require('./routes/tipo_violencia'));
app.use(require('./routes/tipo_condicion'));
app.use(require('./routes/terapeutas'));
app.use(require('./routes/remision'));
app.use(require('./routes/recursos_municipales'));
app.use(require('./routes/pacientes'));
app.use(require('./routes/tratamiento'));
app.use(require('./routes/municipio'));
app.use(require('./routes/estado_ocupacion'));
app.use(require('./routes/estado_civil'));
app.use(require('./routes/estado_atencion'));
app.use(require('./routes/educacion'));
app.use(require('./routes/causa_violencia'));
app.use(require('./routes/casos'));
app.use(require('./routes/caso_tipo_violencia'));
app.use(require('./routes/departamento'));

app.get('/', (req, res) => {
    res.send('Caritas API');
});

//start the server
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
    //console.log(format.USUARIO_POST('marioxe301','holamundo'));
});