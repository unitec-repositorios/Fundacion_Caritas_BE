-- insertar usuario
insert into USUARIO (usuario,contraseña) values ('Marioxe301','hola');
-- select usuario
select * from USUARIO;
-- delete usuario
delete from USUARIO where usuario = 'Marioxe301';
-- select usuario por username
select * from USUARIO where usuario = 'nombrex';
-- modifica usuario
update USUARIO set usuario = 'modificado', contraseña = 'modificado' where usuario = 'x';

-- insertar ubicacion violencia
insert into UBICACION_VIOLENCIA (ubicacion) values ('cerqw');
-- mostrar ubicacion de violencia
select * from UBICACION_VIOLENCIA;
-- eliminar uv
delete from UBICACION_VIOLENCIA where id_uviolencia = 3;
-- actualizar uv
update UBICACION_VIOLENCIA set ubicacion = 'crwe' where id_uviolencia = 0;

-- inserta tipo violencia
insert into TIPO_VIOLENCIA (tipo) values('cew');
-- mostrar tipos violencia
select * from TIPO_VIOLENCIA;
-- eliminar tipo violencia
delete from TIPO_VIOLENCIA where id_tipoviolencia = 0;
-- actualizar tipo violencia
update TIPO_VIOLENCIA set tipo = 'crwcw' where id_tipoviolencia = 0;

-- insertat tipo de condicion
insert into TIPO_CONDICION (condicion) values ('cweq');
-- mostrar ctipo condicion
select * from TIPO_CONDICION;
-- eliminar condicion
delete from TIPO_CONDICION where id_condicion = 0;
-- update condicion
update TIPO_CONDICION set condicion = 'cwer' where id_condicion = 0;

-- inserta terapeutas
insert into TERAPEUTA (nombre) values ('crw');
-- mostrart terapesutas
select * from TERAPEUTA;
-- eliminar terapeutas
delete from TERAPEUTA where id_terapeuta = 0;
-- actualizar
update TERAPEUTA set nombre = 'cwer' where id_terapeuta = 0;

-- insertar remision
insert into REMISION (juez) values ('cwr');
-- mostrar remision
select * from REMISION;
-- eliminar remision
delete from REMISION where id_remision = 0;
-- actualizar remision
update REMISION set juez = 'crw' where id_remision = 0;

-- insert rm
insert into RECURSOS_MUNICIPALES (tipo) values ('crweq');
-- mostrar rm
select * from RECURSOS_MUNICIPALES;
-- eliminar rm
delete from RECURSOS_MUNICIPALES where id_recursos = 0;
-- actualizar rm
update RECURSOS_MUNICIPALES set tipo = 'crwe' where id_recursos=0;

-- insertar paciente
insert into PACIENTE (identidad,nombres,apellidos,edad,genero,oficio,id_estadoc,id_estado,id_educacion)
values('','','',23,'F','crewc',1,1,1);
-- mostrart paciente
select pc.identidad, pc.nombres as nombre, pc.apellidos as apellido,
pc.edad, pc. genero, pc.oficio, ec.estado as estado_civil,
eo.tipo as trabajo, ed.tipo educacion from PACIENTE pc 
inner join ESTADO_CIVIL ec on pc.id_estadoc = ec.id_estadoc
inner join ESTADO_OCUPACION eo on pc.id_estado = eo.id_estado
inner join EDUCACION ed on pc.id_educacion = ed.id_educacion;
-- eliminar paciente
delete from PACIENTE where id_paciente = 0;
-- modificar pacieente
update PACIENTE set identidad = '', nombres = '', apellidos = '',edad = 0,genero = 'c',
oficio = 'cre', id_estadoc = 1, id_estado = 1, id_educacion = 1 where id_paciente = 0;

-- insetar municipio
insert into MUNICIPIO (nombre) values ('crw');
-- mostrar municipios
select * from MUNICIPIO;
-- eliminar municipios
delete from MUNICIPIO where id_municipio = 0;
-- actualizar municipio
update MUNICIPIO set nombre = ' ' where id_municipio = 0;

-- insertar estado ocupacion
insert into ESTADO_OCUPACION (tipo) values ('crwq');
-- mostrar
select * from ESTADO_OCUPACION;
-- eliminar
delete from ESTADO_OCUPACION where id_estado = 0;
-- actualizar
update ESTADO_OCUPACION set tipo = ' ' where id_estado = 0;

-- insetar estado civil
insert into ESTADO_CIVIL (estado) values ('crwe');
-- mostrar
select * from ESTADO_CIVIL;
-- eliminar
delete from ESTADO_CIVIL where id_estadoc = 0;
-- actualizar
update ESTADO_CIVIL set estado = ' ' where id_estadoc = 0;

-- insertar estado atencion
insert into ESTADO_ATENCION (estado) values ('cw');
-- mostrar 
select * from ESTADO_ATENCION;
-- delete
delete from ESTADO_ATENCION where id_estadoa = 0;
-- update
update ESTADO_ATENCION set estado = ' ' where id_estadoa = 0;

-- insertar educacion
insert into EDUCACION (tipo) values ('rcw');
-- mostrar
select * from EDUCACION;
-- eliminar
delete from EDUCACION where id_educacion = 0;
-- update
update EDUCACION set tipo = ' ' where id_educacion = 0;

-- insertar causa violencia
insert into CAUSA_VIOLENCIA (causa) values ('');
-- mostrar
select * from CAUSA_VIOLENCIA;
-- eliminar
delete from CAUSA_VIOLENCIA where id_causa = 0;
-- update
update CAUSA_VIOLENCIA set causa = 'cr' where id_causa = 0;

-- insert caso x tv
insert into CASO_TIPO_VIOLENCIA (id_caso,id_tipoviolencia) values (1,1);
-- mostrar
select tv.tipo as violencia from CASO cs 
inner join CASO_TIPO_VIOLENCIA ctp on cs.id_caso = ctp.id_caso
inner join TIPO_VIOLENCIA tv on ctp.id_tipoviolencia = tv.id_tipoviolencia
where cs.id_caso = 0;
-- delete
delete from CASO_TIPO_VIOLENCIA where id_caso = 0;
-- update
update CASO_TIPO_VIOLENCIA set id_tipoviolencia = 0 where id_caso = 0;

-- insert caso
insert into CASO (numero_expediente,cantidad_beneficiados,id_uviolencia,id_estadoa,id_municipio,
id_remision,id_recursos,id_causa,id_terapeuta,id_paciente,id_condicion) values ('',1,1,1,1,1,1,1,1,1);
-- mostrar caso
select concat(pc.nombres,' ',pc.apellidos) as nombre,
tc.condicion,tr.nombre as terapeuta, cv.causa , rmp.tipo as recursos,
rm.juez, mn.nombre as municipio, ea.estado as estado_atencion,
uv.ubicacion as ubicacion_violencia from CASO cs
inner join UBICACION_VIOLENCIA uv on cs.id_uviolencia = uv.id_uviolencia
inner join ESTADO_ATENCION ea on cs.id_estadoa = ea.id_estadoa
inner join MUNICIPIO mn on cs.id_municipio = mn.id_municipio
inner join REMISION rm on cs.id_remision = rm.id_remision
inner join RECURSOS_MUNICIPALES rmp on cs.id_recursos = rmp.id_recursos
inner join CAUSA_VIOLENCIA cv on cs.id_causa = cv.id_causa
inner join TERAPEUTA tr on cs.id_terapeuta = tr.id_terapeuta
inner join PACIENTE pc on cs.id_paciente = pc.id_paciente
inner join TIPO_CONDICION tc on cs.id_condicion = tc.id_condicion;
-- delete caso
delete from CASO where id_caso = 0;
-- modificar
update CASO set numero_expediente='',cantidad_beneficiados=3,
id_uviolencia = 0,id_estadoa=0,id_municipio=0,
id_remision=0,id_recursos=0,id_causa=0,
id_terapeuta=0,id_paciente=0,id_condicion=0
where id_caso = 0

