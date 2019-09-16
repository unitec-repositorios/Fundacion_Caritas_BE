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

-- Crear la nueva Tabla de Roles

CREATE TABLE `CARITAS`.`ROLES` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NULL,
  PRIMARY KEY (`id_rol`));

INSERT INTO `CARITAS`.`ROLES` (`id_rol`, `rol`) VALUES ('1', 'Administrador');
INSERT INTO `CARITAS`.`ROLES` (`id_rol`, `rol`) VALUES ('2', 'Usuario');

-- Alterar tabla de usuarios

ALTER TABLE `CARITAS`.`USUARIO` 
ADD COLUMN `id_rol` INT NULL AFTER `contraseña`,
ADD INDEX `fk_USUARIO_1_idx` (`id_rol` ASC);
ALTER TABLE `CARITAS`.`USUARIO` 
ADD CONSTRAINT `fk_USUARIO_1`
  FOREIGN KEY (`id_rol`)
  REFERENCES `CARITAS`.`ROLES` (`id_rol`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- Alterar View de Usuarios

USE `CARITAS`;
CREATE  OR REPLACE VIEW `VIEW_USUARIO` AS
select usu.usuario, usu.contraseña, rl.rol from USUARIO usu 
inner join ROLES rl on usu.id_rol = rl.id_rol;

-- Alter al procedimineto de crear usuarios
USE `CARITAS`;
DROP procedure IF EXISTS `CREATE_USUARIO`;

DELIMITER $$
USE `CARITAS`$$
CREATE DEFINER=`caritas`@`localhost` PROCEDURE `CREATE_USUARIO`(user varchar(45),pass varchar(45),rol INT)
BEGIN
insert into USUARIO (usuario,contraseña,id_rol) values (user,pass,rol);

END$$

DELIMITER ;

-- Alter al procedimineto de modificar usuarios
USE `CARITAS`;
DROP procedure IF EXISTS `UPDATE_USUARIO`;

DELIMITER $$
USE `CARITAS`$$
CREATE DEFINER=`caritas`@`localhost` PROCEDURE `UPDATE_USUARIO`(USER VARCHAR(45),PASS VARCHAR(45),NUSER VARCHAR(45),ROL INT)
BEGIN
update USUARIO set usuario = NUSER, contraseña = PASS, id_rol= ROL where usuario = USER;

END$$

DELIMITER ;

-- Nuevo procedimiento de agregar rol
USE `CARITAS`;
DROP procedure IF EXISTS `CREATE_ROLES`;

DELIMITER $$
USE `CARITAS`$$
CREATE PROCEDURE `CREATE_ROLES` (ROL VARCHAR(45))
BEGIN
	insert INTO ROLES (rol) values (ROL);
END$$

DELIMITER ;

-- Nuevo procedimiento de modificar rol
USE `CARITAS`;
DROP procedure IF EXISTS `UPDATE_ROLES`;

DELIMITER $$
USE `CARITAS`$$
CREATE PROCEDURE `UPDATE_ROLES` (ID INT,ROL VARCHAR(45))
BEGIN
 UPDATE ROLES SET rol = ROL where id_rol = ID;
END$$

DELIMITER ;

-- Nuevo procedimiento de borrar roles
USE `CARITAS`;
DROP procedure IF EXISTS `DELETE_ROLES`;

DELIMITER $$
USE `CARITAS`$$
CREATE PROCEDURE `DELETE_ROLES` (ID INT)
BEGIN
	delete FROM ROLES where id_rol = ID;
END$$

DELIMITER ;

-- View Roles
USE `CARITAS`;
CREATE  OR REPLACE VIEW `VIEW_ROLES` AS
select * from ROLES;;


