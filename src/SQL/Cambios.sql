-- Cambio al view de remision
USE `CARITAS`;
CREATE 
     OR REPLACE ALGORITHM = UNDEFINED 
    DEFINER = `caritas`@`localhost` 
    SQL SECURITY DEFINER
VIEW `VIEW_REMISION` AS
    SELECT 
        `REMISION`.`id_remision` AS `id_remision`,
        `REMISION`.`juez` AS `juez`
    FROM
        `REMISION`;
-- Update de estados de atencion modificado
USE `CARITAS`;
DROP procedure IF EXISTS `UPDATE_ESTADO_ATENCION`;

DELIMITER $$
USE `CARITAS`$$
CREATE DEFINER=`caritas`@`localhost` PROCEDURE `UPDATE_ESTADO_ATENCION`(ID INT,ESTADO VARCHAR(45))
BEGIN
update ESTADO_ATENCION set estado = ESTADO where id_estadoa = ID;
END$$

DELIMITER ;

-- correcion de procedimineto de crear pacientes
USE `CARITAS`;
DROP procedure IF EXISTS `CREATE_PACIENTE`;

DELIMITER $$
USE `CARITAS`$$
CREATE DEFINER=`caritas`@`localhost` PROCEDURE `CREATE_PACIENTE`(IDEN VARCHAR(15),NOMB VARCHAR(50),APELL VARCHAR(50),EDAD INT
,GENERO CHAR,OFICIO VARCHAR(45),ESTADOCIVIL INT,REMUNERA INT,EDUACION INT,DEP INT)
BEGIN
insert into PACIENTE (identidad,nombres,apellidos,edad,genero,oficio,id_estadoc,id_estado,id_educacion,id_departamento)
values(IDEN,NOMB,APELL,EDAD,GENERO,OFICIO,ESTADOCIVIL,REMUNERA,EDUACION,DEP);
END$$

DELIMITER ;



