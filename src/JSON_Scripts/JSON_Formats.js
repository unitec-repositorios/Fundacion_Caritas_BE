module.exports = {

    USUARIO_POST: function(USUARIO,CONTRASEÑA,ROL){
        return ({user: USUARIO,pass: CONTRASEÑA,rol:ROL});
    },
    USUARIO_PUT : function (NUSUARIO,CONTRASEÑA,ROL){
        return ({NUSER: NUSUARIO,PASS: CONTRASEÑA,ROL:ROL});
    },
    
     UBICACION_VIOLENCIA_POST_Y_PUT : function(UBIVIOLENCIA){
        return ({UVIOLENCIA:UBIVIOLENCIA});
    },
    
    TRATAMIENTO_POST_Y_PUT : function(TRATAMIENTO){
        return  ({TRATA: TRATAMIENTO});
    },
    
    TIPO_VIOLENCIA_POST_Y_PUT : function(TIPOVIOLENCIA){
        return  ({TIPOV: TIPOVIOLENCIA});
    },
    
    TIPO_CONDICION_POST_Y_PUT : function(CONDICION){
        return ({COND: CONDICION});
    },

    TERAPEUTAS_POST_Y_PUT : function(NOMBRE){
        return ({NOMB: NOMBRE});
    },

    REMISION_POST_Y_PUT : function(REMISION){
        return ({JUEZ: REMISION});
    },
    
    RECURSOS_MUNICIPALES_POST_Y_PUT : function(RECURSOSMUNICIPALES){
        return ({RECURSO: RECURSOSMUNICIPALES});
    },

    PACIENTES_POST_Y_PUT : function(IDENTIDAD,NOMBRE,APELLIDO,ED,GEN,OFI,ESTADOC,REMUNERACION,EDUCACION,DEPART){
        return ({IDEN: IDENTIDAD,NOMB: NOMBRE,APELL: APELLIDO,
                               EDAD: ED,GENERO: GEN,OFICIO: OFI,ESTADOCIVIL: ESTADOC,
                               REMUNERA: REMUNERACION,EDUACION: EDUCACION,DEP: DEPART});
                            },
                            
    MUNICIPIO_POST_Y_PUT : function(MUNICIPALIDAD){
        return ({MUNI: MUNICIPALIDAD});
    },
    
    ESTADO_OCUPACION_POST_Y_PUT : function (ESTADOOCUPACION){
        return ({ESTADO: ESTADOOCUPACION});
    },

    ESTADO_CIVIL_POST_Y_PUT : function(ESTADOCIVIL){
        return ({ESTADO: ESTADOCIVIL});
    },

    ESTADO_ATENCION_POST_Y_PUT : function(ESTADOATENCION){
        return ({ESTADO:ESTADOATENCION});
    },
    
    EDUCACION_POST_Y_PUT : function(EDUACION){
        return ({EDU: EDUACION});
    },
    
    CAUSA_VIOLENCIA_POST_Y_PUT : function(CAUSAVIOLENCIA){
        return ({CAUSA: CAUSAVIOLENCIA});
    },
    
    CASOS_POST_Y_PUT : function (NUMEXPE,CANTBEN,IDUVIOLEN,IDEATEN,IDMUNICI,IDREMIS,IDRECUR,IDCAUSAV,IDTERAPE,IDPACIE,IDCONDIC,TRATA) {
        return ({NUMEXP: NUMEXPE,CANTB: CANTBEN,IDUVIO: IDUVIOLEN
            ,IDEAT: IDEATEN,IDMUNI: IDMUNICI,IDREMI: IDREMIS,IDREC: IDRECUR,IDCAUSA: IDCAUSAV,IDTERA: IDTERAPE
            ,IDPAC: IDPACIE,IDCOND: IDCONDIC,IDTRATA: TRATA});
        },
        
        CASOS_TIPO_VIOLENCIA_POST_PUT : function (IDCASOS, IDTIPOVIOLENCIA){
            return ({IDCASO: IDCASOS, IDTVIO: IDTIPOVIOLENCIA});
        },
        
    DEPARTAMENTO_POST_Y_PUT : function(DEPAR){
        return ({DEP: DEPAR});
    },
    ROLES_POST_Y_PUT: function(rol){
        return ({ROL:rol});
    }
};
    