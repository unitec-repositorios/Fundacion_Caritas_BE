class JSON_Format{
    USUARIO_POST = (USUARIO,CONTRASEÑA)=>{
        return ({user: USUARIO,pass: CONTRASEÑA});
    }
    USUARIO_PUT = (NUSUARIO,CONTRASEÑA)=>{
        return ({NUSER: NUSUARIO,PASS: CONTRASEÑA});
    }

    UBICACION_VIOLENCIA_POST_Y_PUT =(UBIVIOLENCIA)=>{
        return ({UVIOLENCIA:UBIVIOLENCIA});
    }

    TRATAMIENTO_POST_Y_PUT =(TRATAMIENTO)=>{
        return  ({TRATA: TRATAMIENTO});
    }

    TIPO_VIOLENCIA_POST_Y_PUT =(TIPOVIOLENCIA)=>{
        return  ({TIPOV: TIPOVIOLENCIA});
    }

    TIPO_CONDICION_POST_Y_PUT =(CONDICION)=>{
        return ({COND: CONDICION});
    }

    TERAPEUTAS_POST_Y_PUT =(NOMBRE)=>{
        return ({NOMB: NOMBRE});
    }

    REMISION_POST_Y_PUT =(REMISION)=>{
        return ({JUEZ: REMISION});
    }

    RECURSOS_MUNICIPALES_POST_Y_PUT =(RECURSOSMUNICIPALES)=>{
        return ({RECURSO: RECURSOSMUNICIPALES});
    }

    PACIENTES_POST_Y_PUT =(IDENTIDAD,NOMBRE,APELLIDO,ED,GEN,OFI,ESTADOC,REMUNERACION,EDUCACION)=>{
        return ({IDEN: IDENTIDAD,NOMB: NOMBRE,APELL: APELLIDO,
                               EDAD: ED,GENERO: GEN,OFICIO: OFI,ESTADOCIVIL: ESTADOC,
                               REMUNERA: REMUNERACION,EDUACION: EDUCACION});
    }

    MUNICIPIO_POST_Y_PUT =(MUNICIPALIDAD)=>{
        return ({MUNI: MUNICIPALIDAD});
    }

    ESTADO_OCUPACION_POST_Y_PUT = (ESTADOOCUPACION)=>{
        return ({ESTADO: ESTADOOCUPACION});
    }

    ESTADO_CIVIL_POST_Y_PUT =(ESTADOCIVIL)=>{
        return ({ESTADO: ESTADOCIVIL});
    }

    ESTADO_ATENCION_POST_Y_PUT =(ESTADOATENCION)=>{
        return ({ESTADO:ESTADOATENCION});
    }

    EDUCACION_POST_Y_PUT =(EDUACION)=>{
        return ({EDU: EDUACION});
    }

    CAUSA_VIOLENCIA_POST_Y_PUT =(CAUSAVIOLENCIA)=>{
        return ({CAUSA: CAUSAVIOLENCIA});
    }

    CASOS_POST_Y_PUT = (NUMEXPE,CANTBEN,IDUVIOLEN,IDEATEN,IDMUNICI,IDREMIS,IDRECUR,IDCAUSAV,IDTERAPE,IDPACIE,IDCONDIC,TRATA) =>{
        return ({NUMEXP: NUMEXPE,CANTB: CANTBEN,IDUVIO: IDUVIOLEN
            ,IDEAT: IDEATEN,IDMUNI: IDMUNICI,IDREMI: IDREMIS,IDREC: IDRECUR,IDCAUSA: IDCAUSAV,IDTERA: IDTERAPE
            ,IDPAC: IDPACIE,IDCOND: IDCONDIC,IDTRATA: TRATA});
    }

    CASOS_TIPO_VIOLENCIA_POST_PUT = (IDCASOS, IDTIPOVIOLENCIA)=>{
        return ({IDCASO: IDCASOS, IDTVIO: IDTIPOVIOLENCIA});
    }

    
}

module.exports = JSON_Format;