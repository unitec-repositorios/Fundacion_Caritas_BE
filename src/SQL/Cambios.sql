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

