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


