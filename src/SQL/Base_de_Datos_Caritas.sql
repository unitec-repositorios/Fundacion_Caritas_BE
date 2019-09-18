-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: CARITAS
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CASO`
--

DROP TABLE IF EXISTS `CASO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CASO` (
  `id_caso` int(11) NOT NULL AUTO_INCREMENT,
  `numero_expediente` varchar(45) DEFAULT NULL,
  `cantidad_beneficiados` int(11) DEFAULT NULL,
  `id_uviolencia` int(11) NOT NULL,
  `id_estadoa` int(11) NOT NULL,
  `id_municipio` int(11) NOT NULL,
  `id_remision` int(11) NOT NULL,
  `id_recursos` int(11) NOT NULL,
  `id_causa` int(11) NOT NULL,
  `id_terapeuta` int(11) NOT NULL,
  `id_paciente` int(11) NOT NULL,
  `id_condicion` int(11) NOT NULL,
  `id_tratamiento` int(11) NOT NULL,
  PRIMARY KEY (`id_caso`),
  KEY `fk_CASO_UBICACION_VIOLENCIA1_idx` (`id_uviolencia`),
  KEY `fk_CASO_ESTADO_ATENCION1_idx` (`id_estadoa`),
  KEY `fk_CASO_MUNICIPIO1_idx` (`id_municipio`),
  KEY `fk_CASO_REMISION1_idx` (`id_remision`),
  KEY `fk_CASO_RECURSOS_MUNICIPALES1_idx` (`id_recursos`),
  KEY `fk_CASO_CAUSA_VIOLENCIA1_idx` (`id_causa`),
  KEY `fk_CASO_TERAPEUTA1_idx` (`id_terapeuta`),
  KEY `fk_CASO_PACIENTE1_idx` (`id_paciente`),
  KEY `fk_CASO_TIPO_CONDICION1_idx` (`id_condicion`),
  KEY `fk_CASO_TRATAMIENTO1_idx` (`id_tratamiento`),
  CONSTRAINT `fk_CASO_CAUSA_VIOLENCIA1` FOREIGN KEY (`id_causa`) REFERENCES `CAUSA_VIOLENCIA` (`id_causa`),
  CONSTRAINT `fk_CASO_ESTADO_ATENCION1` FOREIGN KEY (`id_estadoa`) REFERENCES `ESTADO_ATENCION` (`id_estadoa`),
  CONSTRAINT `fk_CASO_MUNICIPIO1` FOREIGN KEY (`id_municipio`) REFERENCES `MUNICIPIO` (`id_municipio`),
  CONSTRAINT `fk_CASO_PACIENTE1` FOREIGN KEY (`id_paciente`) REFERENCES `PACIENTE` (`id_paciente`),
  CONSTRAINT `fk_CASO_RECURSOS_MUNICIPALES1` FOREIGN KEY (`id_recursos`) REFERENCES `RECURSOS_MUNICIPALES` (`id_recursos`),
  CONSTRAINT `fk_CASO_REMISION1` FOREIGN KEY (`id_remision`) REFERENCES `REMISION` (`id_remision`),
  CONSTRAINT `fk_CASO_TERAPEUTA1` FOREIGN KEY (`id_terapeuta`) REFERENCES `TERAPEUTA` (`id_terapeuta`),
  CONSTRAINT `fk_CASO_TIPO_CONDICION1` FOREIGN KEY (`id_condicion`) REFERENCES `TIPO_CONDICION` (`id_condicion`),
  CONSTRAINT `fk_CASO_TRATAMIENTO1` FOREIGN KEY (`id_tratamiento`) REFERENCES `TRATAMIENTO` (`id_tratamiento`),
  CONSTRAINT `fk_CASO_UBICACION_VIOLENCIA1` FOREIGN KEY (`id_uviolencia`) REFERENCES `UBICACION_VIOLENCIA` (`id_uviolencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CASO`
--

LOCK TABLES `CASO` WRITE;
/*!40000 ALTER TABLE `CASO` DISABLE KEYS */;
/*!40000 ALTER TABLE `CASO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CASO_TIPO_VIOLENCIA`
--

DROP TABLE IF EXISTS `CASO_TIPO_VIOLENCIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CASO_TIPO_VIOLENCIA` (
  `id_caso` int(11) NOT NULL,
  `id_tipoviolencia` int(11) NOT NULL,
  KEY `fk_CASO_has_TIPO_VIOLENCIA_TIPO_VIOLENCIA1_idx` (`id_tipoviolencia`),
  KEY `fk_CASO_has_TIPO_VIOLENCIA_CASO1_idx` (`id_caso`),
  CONSTRAINT `fk_CASO_has_TIPO_VIOLENCIA_CASO1` FOREIGN KEY (`id_caso`) REFERENCES `CASO` (`id_caso`),
  CONSTRAINT `fk_CASO_has_TIPO_VIOLENCIA_TIPO_VIOLENCIA1` FOREIGN KEY (`id_tipoviolencia`) REFERENCES `TIPO_VIOLENCIA` (`id_tipoviolencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CASO_TIPO_VIOLENCIA`
--

LOCK TABLES `CASO_TIPO_VIOLENCIA` WRITE;
/*!40000 ALTER TABLE `CASO_TIPO_VIOLENCIA` DISABLE KEYS */;
/*!40000 ALTER TABLE `CASO_TIPO_VIOLENCIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CAUSA_VIOLENCIA`
--

DROP TABLE IF EXISTS `CAUSA_VIOLENCIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CAUSA_VIOLENCIA` (
  `id_causa` int(11) NOT NULL AUTO_INCREMENT,
  `causa` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_causa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CAUSA_VIOLENCIA`
--

LOCK TABLES `CAUSA_VIOLENCIA` WRITE;
/*!40000 ALTER TABLE `CAUSA_VIOLENCIA` DISABLE KEYS */;
INSERT INTO `CAUSA_VIOLENCIA` VALUES (1,'Economica'),(2,'Infidelidad'),(3,'Alcholismo');
/*!40000 ALTER TABLE `CAUSA_VIOLENCIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DEPARTAMENTOS`
--

DROP TABLE IF EXISTS `DEPARTAMENTOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DEPARTAMENTOS` (
  `id_departamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DEPARTAMENTOS`
--

LOCK TABLES `DEPARTAMENTOS` WRITE;
/*!40000 ALTER TABLE `DEPARTAMENTOS` DISABLE KEYS */;
INSERT INTO `DEPARTAMENTOS` VALUES (1,'Atlántida'),(2,'Choluteca'),(3,'Colón'),(4,'Comayagua'),(5,'Copán'),(6,'Cortes'),(7,'El Paraíso'),(8,'Francisco Morazán'),(9,'Gracias a Dios'),(10,'Intibucá'),(11,'Islas de la Bahía'),(12,'La Paz'),(13,'Lempira'),(14,'Ocotepeque'),(15,'Olancho'),(16,'Santa Bárbara'),(17,'Valle'),(18,'Yoro');
/*!40000 ALTER TABLE `DEPARTAMENTOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EDUCACION`
--

DROP TABLE IF EXISTS `EDUCACION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EDUCACION` (
  `id_educacion` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_educacion`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EDUCACION`
--

LOCK TABLES `EDUCACION` WRITE;
/*!40000 ALTER TABLE `EDUCACION` DISABLE KEYS */;
INSERT INTO `EDUCACION` VALUES (1,'Analfabeta'),(2,'Pre-Basica Incompleta'),(3,'Pre-Basica Completa'),(4,'Basica Incompleta'),(5,'Basica Completa'),(6,'Superior Incompleta'),(7,'Superior Completa');
/*!40000 ALTER TABLE `EDUCACION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ESTADO_ATENCION`
--

DROP TABLE IF EXISTS `ESTADO_ATENCION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ESTADO_ATENCION` (
  `id_estadoa` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_estadoa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ESTADO_ATENCION`
--

LOCK TABLES `ESTADO_ATENCION` WRITE;
/*!40000 ALTER TABLE `ESTADO_ATENCION` DISABLE KEYS */;
INSERT INTO `ESTADO_ATENCION` VALUES (1,'Proceso'),(2,'Espera'),(3,'Abandono');
/*!40000 ALTER TABLE `ESTADO_ATENCION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ESTADO_CIVIL`
--

DROP TABLE IF EXISTS `ESTADO_CIVIL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ESTADO_CIVIL` (
  `id_estadoc` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_estadoc`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ESTADO_CIVIL`
--

LOCK TABLES `ESTADO_CIVIL` WRITE;
/*!40000 ALTER TABLE `ESTADO_CIVIL` DISABLE KEYS */;
INSERT INTO `ESTADO_CIVIL` VALUES (1,'Casado'),(2,'Soltero'),(3,'Union Libre'),(5,'VIUDO');
/*!40000 ALTER TABLE `ESTADO_CIVIL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ESTADO_OCUPACION`
--

DROP TABLE IF EXISTS `ESTADO_OCUPACION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ESTADO_OCUPACION` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ESTADO_OCUPACION`
--

LOCK TABLES `ESTADO_OCUPACION` WRITE;
/*!40000 ALTER TABLE `ESTADO_OCUPACION` DISABLE KEYS */;
INSERT INTO `ESTADO_OCUPACION` VALUES (1,'Trabajo Remunerado'),(2,'Trabajo No-Remunerado');
/*!40000 ALTER TABLE `ESTADO_OCUPACION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MUNICIPIO`
--

DROP TABLE IF EXISTS `MUNICIPIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MUNICIPIO` (
  `id_municipio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_municipio`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MUNICIPIO`
--

LOCK TABLES `MUNICIPIO` WRITE;
/*!40000 ALTER TABLE `MUNICIPIO` DISABLE KEYS */;
INSERT INTO `MUNICIPIO` VALUES (1,'San Pedro Sula'),(2,'La Lima'),(3,'Villanueva'),(6,'CHOLOMA');
/*!40000 ALTER TABLE `MUNICIPIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PACIENTE`
--

DROP TABLE IF EXISTS `PACIENTE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PACIENTE` (
  `id_paciente` int(11) NOT NULL AUTO_INCREMENT,
  `identidad` varchar(15) DEFAULT NULL,
  `nombres` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `edad` int(8) DEFAULT NULL,
  `genero` char(1) DEFAULT NULL,
  `oficio` varchar(45) DEFAULT NULL,
  `id_estadoc` int(11) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `id_educacion` int(11) NOT NULL,
  `id_departamento` int(11) NOT NULL,
  PRIMARY KEY (`id_paciente`),
  KEY `fk_PACIENTE_ESTADO_CIVIL_idx` (`id_estadoc`),
  KEY `fk_PACIENTE_ESTADO_OCUPACION1_idx` (`id_estado`),
  KEY `fk_PACIENTE_EDUCACION1_idx` (`id_educacion`),
  KEY `fk_PACIENTE_DEPARTAMENTO_idx` (`id_departamento`),
  CONSTRAINT `fk_PACIENTE_DEPARTAMENTO` FOREIGN KEY (`id_departamento`) REFERENCES `DEPARTAMENTOS` (`id_departamento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_PACIENTE_EDUCACION1` FOREIGN KEY (`id_educacion`) REFERENCES `EDUCACION` (`id_educacion`),
  CONSTRAINT `fk_PACIENTE_ESTADO_CIVIL` FOREIGN KEY (`id_estadoc`) REFERENCES `ESTADO_CIVIL` (`id_estadoc`),
  CONSTRAINT `fk_PACIENTE_ESTADO_OCUPACION1` FOREIGN KEY (`id_estado`) REFERENCES `ESTADO_OCUPACION` (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PACIENTE`
--

LOCK TABLES `PACIENTE` WRITE;
/*!40000 ALTER TABLE `PACIENTE` DISABLE KEYS */;
/*!40000 ALTER TABLE `PACIENTE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RECURSOS_MUNICIPALES`
--

DROP TABLE IF EXISTS `RECURSOS_MUNICIPALES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RECURSOS_MUNICIPALES` (
  `id_recursos` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_recursos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RECURSOS_MUNICIPALES`
--

LOCK TABLES `RECURSOS_MUNICIPALES` WRITE;
/*!40000 ALTER TABLE `RECURSOS_MUNICIPALES` DISABLE KEYS */;
INSERT INTO `RECURSOS_MUNICIPALES` VALUES (1,'UMEP'),(2,'OMM'),(3,'ONG'),(4,'Juzgado'),(5,'Fiscal');
/*!40000 ALTER TABLE `RECURSOS_MUNICIPALES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REMISION`
--

DROP TABLE IF EXISTS `REMISION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REMISION` (
  `id_remision` int(11) NOT NULL AUTO_INCREMENT,
  `juez` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_remision`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REMISION`
--

LOCK TABLES `REMISION` WRITE;
/*!40000 ALTER TABLE `REMISION` DISABLE KEYS */;
INSERT INTO `REMISION` VALUES (1,'JEVD'),(2,'JEVS'),(3,'JP');
/*!40000 ALTER TABLE `REMISION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ROLES`
--

DROP TABLE IF EXISTS `ROLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ROLES` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ROLES`
--

LOCK TABLES `ROLES` WRITE;
/*!40000 ALTER TABLE `ROLES` DISABLE KEYS */;
INSERT INTO `ROLES` VALUES (1,'Administrador'),(2,'Usuario');
/*!40000 ALTER TABLE `ROLES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TERAPEUTA`
--

DROP TABLE IF EXISTS `TERAPEUTA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TERAPEUTA` (
  `id_terapeuta` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_terapeuta`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TERAPEUTA`
--

LOCK TABLES `TERAPEUTA` WRITE;
/*!40000 ALTER TABLE `TERAPEUTA` DISABLE KEYS */;
INSERT INTO `TERAPEUTA` VALUES (1,'Miriam Fonseca'),(2,'Nataly Valle');
/*!40000 ALTER TABLE `TERAPEUTA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TIPO_CONDICION`
--

DROP TABLE IF EXISTS `TIPO_CONDICION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TIPO_CONDICION` (
  `id_condicion` int(11) NOT NULL AUTO_INCREMENT,
  `condicion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_condicion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TIPO_CONDICION`
--

LOCK TABLES `TIPO_CONDICION` WRITE;
/*!40000 ALTER TABLE `TIPO_CONDICION` DISABLE KEYS */;
INSERT INTO `TIPO_CONDICION` VALUES (1,'Victima'),(2,'Agresor');
/*!40000 ALTER TABLE `TIPO_CONDICION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TIPO_VIOLENCIA`
--

DROP TABLE IF EXISTS `TIPO_VIOLENCIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TIPO_VIOLENCIA` (
  `id_tipoviolencia` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_tipoviolencia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TIPO_VIOLENCIA`
--

LOCK TABLES `TIPO_VIOLENCIA` WRITE;
/*!40000 ALTER TABLE `TIPO_VIOLENCIA` DISABLE KEYS */;
INSERT INTO `TIPO_VIOLENCIA` VALUES (1,'Violencia Psicologica'),(2,'Violencia Fisica'),(3,'Violencia Economica'),(4,'Violencia Sexual');
/*!40000 ALTER TABLE `TIPO_VIOLENCIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TRATAMIENTO`
--

DROP TABLE IF EXISTS `TRATAMIENTO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TRATAMIENTO` (
  `id_tratamiento` int(11) NOT NULL AUTO_INCREMENT,
  `tratamiento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_tratamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TRATAMIENTO`
--

LOCK TABLES `TRATAMIENTO` WRITE;
/*!40000 ALTER TABLE `TRATAMIENTO` DISABLE KEYS */;
INSERT INTO `TRATAMIENTO` VALUES (1,'Consejeria');
/*!40000 ALTER TABLE `TRATAMIENTO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UBICACION_VIOLENCIA`
--

DROP TABLE IF EXISTS `UBICACION_VIOLENCIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UBICACION_VIOLENCIA` (
  `id_uviolencia` int(11) NOT NULL AUTO_INCREMENT,
  `ubicacion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_uviolencia`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UBICACION_VIOLENCIA`
--

LOCK TABLES `UBICACION_VIOLENCIA` WRITE;
/*!40000 ALTER TABLE `UBICACION_VIOLENCIA` DISABLE KEYS */;
INSERT INTO `UBICACION_VIOLENCIA` VALUES (1,'Urbana'),(2,'Rural');
/*!40000 ALTER TABLE `UBICACION_VIOLENCIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USUARIO`
--

DROP TABLE IF EXISTS `USUARIO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USUARIO` (
  `usuario` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  PRIMARY KEY (`usuario`),
  KEY `fk_USUARIO_1_idx` (`id_rol`),
  CONSTRAINT `fk_USUARIO_1` FOREIGN KEY (`id_rol`) REFERENCES `ROLES` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USUARIO`
--

LOCK TABLES `USUARIO` WRITE;
/*!40000 ALTER TABLE `USUARIO` DISABLE KEYS */;
INSERT INTO `USUARIO` VALUES ('admin','admin',1),('marioxe301','holmundo',2),('marioxe302','holamundo12',2);
/*!40000 ALTER TABLE `USUARIO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `VIEW_CASO`
--

DROP TABLE IF EXISTS `VIEW_CASO`;
/*!50001 DROP VIEW IF EXISTS `VIEW_CASO`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_CASO` AS SELECT 
 1 AS `id_caso`,
 1 AS `nombre`,
 1 AS `condicion`,
 1 AS `terapeuta`,
 1 AS `causa`,
 1 AS `recursos`,
 1 AS `juez`,
 1 AS `municipio`,
 1 AS `estado_atencion`,
 1 AS `ubicacion_violencia`,
 1 AS `tratamiento`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_CAUSA_VIOLENCIA`
--

DROP TABLE IF EXISTS `VIEW_CAUSA_VIOLENCIA`;
/*!50001 DROP VIEW IF EXISTS `VIEW_CAUSA_VIOLENCIA`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_CAUSA_VIOLENCIA` AS SELECT 
 1 AS `id_causa`,
 1 AS `causa`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_DEPARTAMENTO`
--

DROP TABLE IF EXISTS `VIEW_DEPARTAMENTO`;
/*!50001 DROP VIEW IF EXISTS `VIEW_DEPARTAMENTO`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_DEPARTAMENTO` AS SELECT 
 1 AS `id_departamento`,
 1 AS `nombre`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_EDUCACION`
--

DROP TABLE IF EXISTS `VIEW_EDUCACION`;
/*!50001 DROP VIEW IF EXISTS `VIEW_EDUCACION`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_EDUCACION` AS SELECT 
 1 AS `id_educacion`,
 1 AS `tipo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_ESTADO_ATENCION`
--

DROP TABLE IF EXISTS `VIEW_ESTADO_ATENCION`;
/*!50001 DROP VIEW IF EXISTS `VIEW_ESTADO_ATENCION`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_ESTADO_ATENCION` AS SELECT 
 1 AS `id_estadoa`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_ESTADO_CIVIL`
--

DROP TABLE IF EXISTS `VIEW_ESTADO_CIVIL`;
/*!50001 DROP VIEW IF EXISTS `VIEW_ESTADO_CIVIL`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_ESTADO_CIVIL` AS SELECT 
 1 AS `id_estadoc`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_ESTADO_OCUPACION`
--

DROP TABLE IF EXISTS `VIEW_ESTADO_OCUPACION`;
/*!50001 DROP VIEW IF EXISTS `VIEW_ESTADO_OCUPACION`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_ESTADO_OCUPACION` AS SELECT 
 1 AS `id_estado`,
 1 AS `tipo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_MUNICIPIO`
--

DROP TABLE IF EXISTS `VIEW_MUNICIPIO`;
/*!50001 DROP VIEW IF EXISTS `VIEW_MUNICIPIO`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_MUNICIPIO` AS SELECT 
 1 AS `id_municipio`,
 1 AS `nombre`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_PACIENTE`
--

DROP TABLE IF EXISTS `VIEW_PACIENTE`;
/*!50001 DROP VIEW IF EXISTS `VIEW_PACIENTE`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_PACIENTE` AS SELECT 
 1 AS `id_paciente`,
 1 AS `identidad`,
 1 AS `nombre`,
 1 AS `apellido`,
 1 AS `edad`,
 1 AS `genero`,
 1 AS `oficio`,
 1 AS `estado_civil`,
 1 AS `trabajo`,
 1 AS `educacion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_RECURSOS_MUNICIPALES`
--

DROP TABLE IF EXISTS `VIEW_RECURSOS_MUNICIPALES`;
/*!50001 DROP VIEW IF EXISTS `VIEW_RECURSOS_MUNICIPALES`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_RECURSOS_MUNICIPALES` AS SELECT 
 1 AS `id_recursos`,
 1 AS `tipo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_REMISION`
--

DROP TABLE IF EXISTS `VIEW_REMISION`;
/*!50001 DROP VIEW IF EXISTS `VIEW_REMISION`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_REMISION` AS SELECT 
 1 AS `id_remision`,
 1 AS `juez`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_ROLES`
--

DROP TABLE IF EXISTS `VIEW_ROLES`;
/*!50001 DROP VIEW IF EXISTS `VIEW_ROLES`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_ROLES` AS SELECT 
 1 AS `id_rol`,
 1 AS `rol`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_TERAPEUTA`
--

DROP TABLE IF EXISTS `VIEW_TERAPEUTA`;
/*!50001 DROP VIEW IF EXISTS `VIEW_TERAPEUTA`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_TERAPEUTA` AS SELECT 
 1 AS `id_terapeuta`,
 1 AS `nombre`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_TIPO_CONDICION`
--

DROP TABLE IF EXISTS `VIEW_TIPO_CONDICION`;
/*!50001 DROP VIEW IF EXISTS `VIEW_TIPO_CONDICION`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_TIPO_CONDICION` AS SELECT 
 1 AS `id_condicion`,
 1 AS `condicion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_TIPO_VIOLENCIA`
--

DROP TABLE IF EXISTS `VIEW_TIPO_VIOLENCIA`;
/*!50001 DROP VIEW IF EXISTS `VIEW_TIPO_VIOLENCIA`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_TIPO_VIOLENCIA` AS SELECT 
 1 AS `id_tipoviolencia`,
 1 AS `tipo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_TRATAMIENTO`
--

DROP TABLE IF EXISTS `VIEW_TRATAMIENTO`;
/*!50001 DROP VIEW IF EXISTS `VIEW_TRATAMIENTO`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_TRATAMIENTO` AS SELECT 
 1 AS `id_tratamiento`,
 1 AS `tratamiento`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_UBICACION_VIOLENCIA`
--

DROP TABLE IF EXISTS `VIEW_UBICACION_VIOLENCIA`;
/*!50001 DROP VIEW IF EXISTS `VIEW_UBICACION_VIOLENCIA`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_UBICACION_VIOLENCIA` AS SELECT 
 1 AS `id_uviolencia`,
 1 AS `ubicacion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `VIEW_USUARIO`
--

DROP TABLE IF EXISTS `VIEW_USUARIO`;
/*!50001 DROP VIEW IF EXISTS `VIEW_USUARIO`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `VIEW_USUARIO` AS SELECT 
 1 AS `usuario`,
 1 AS `contraseña`,
 1 AS `rol`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `VIEW_CASO`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_CASO`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_CASO` AS select `cs`.`id_caso` AS `id_caso`,concat(`pc`.`nombres`,' ',`pc`.`apellidos`) AS `nombre`,`tc`.`condicion` AS `condicion`,`tr`.`nombre` AS `terapeuta`,`cv`.`causa` AS `causa`,`rmp`.`tipo` AS `recursos`,`rm`.`juez` AS `juez`,`mn`.`nombre` AS `municipio`,`ea`.`estado` AS `estado_atencion`,`uv`.`ubicacion` AS `ubicacion_violencia`,`trm`.`tratamiento` AS `tratamiento` from ((((((((((`CASO` `cs` join `UBICACION_VIOLENCIA` `uv` on((`cs`.`id_uviolencia` = `uv`.`id_uviolencia`))) join `ESTADO_ATENCION` `ea` on((`cs`.`id_estadoa` = `ea`.`id_estadoa`))) join `MUNICIPIO` `mn` on((`cs`.`id_municipio` = `mn`.`id_municipio`))) join `REMISION` `rm` on((`cs`.`id_remision` = `rm`.`id_remision`))) join `RECURSOS_MUNICIPALES` `rmp` on((`cs`.`id_recursos` = `rmp`.`id_recursos`))) join `CAUSA_VIOLENCIA` `cv` on((`cs`.`id_causa` = `cv`.`id_causa`))) join `TERAPEUTA` `tr` on((`cs`.`id_terapeuta` = `tr`.`id_terapeuta`))) join `PACIENTE` `pc` on((`cs`.`id_paciente` = `pc`.`id_paciente`))) join `TIPO_CONDICION` `tc` on((`cs`.`id_condicion` = `tc`.`id_condicion`))) join `TRATAMIENTO` `trm` on((`cs`.`id_tratamiento` = `trm`.`id_tratamiento`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_CAUSA_VIOLENCIA`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_CAUSA_VIOLENCIA`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_CAUSA_VIOLENCIA` AS select `CAUSA_VIOLENCIA`.`id_causa` AS `id_causa`,`CAUSA_VIOLENCIA`.`causa` AS `causa` from `CAUSA_VIOLENCIA` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_DEPARTAMENTO`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_DEPARTAMENTO`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_DEPARTAMENTO` AS select `DEPARTAMENTOS`.`id_departamento` AS `id_departamento`,`DEPARTAMENTOS`.`nombre` AS `nombre` from `DEPARTAMENTOS` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_EDUCACION`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_EDUCACION`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_EDUCACION` AS select `EDUCACION`.`id_educacion` AS `id_educacion`,`EDUCACION`.`tipo` AS `tipo` from `EDUCACION` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_ESTADO_ATENCION`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_ESTADO_ATENCION`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_ESTADO_ATENCION` AS select `ESTADO_ATENCION`.`id_estadoa` AS `id_estadoa`,`ESTADO_ATENCION`.`estado` AS `estado` from `ESTADO_ATENCION` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_ESTADO_CIVIL`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_ESTADO_CIVIL`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_ESTADO_CIVIL` AS select `ESTADO_CIVIL`.`id_estadoc` AS `id_estadoc`,`ESTADO_CIVIL`.`estado` AS `estado` from `ESTADO_CIVIL` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_ESTADO_OCUPACION`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_ESTADO_OCUPACION`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_ESTADO_OCUPACION` AS select `ESTADO_OCUPACION`.`id_estado` AS `id_estado`,`ESTADO_OCUPACION`.`tipo` AS `tipo` from `ESTADO_OCUPACION` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_MUNICIPIO`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_MUNICIPIO`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_MUNICIPIO` AS select `MUNICIPIO`.`id_municipio` AS `id_municipio`,`MUNICIPIO`.`nombre` AS `nombre` from `MUNICIPIO` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_PACIENTE`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_PACIENTE`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_PACIENTE` AS select `pc`.`id_paciente` AS `id_paciente`,`pc`.`identidad` AS `identidad`,`pc`.`nombres` AS `nombre`,`pc`.`apellidos` AS `apellido`,`pc`.`edad` AS `edad`,`pc`.`genero` AS `genero`,`pc`.`oficio` AS `oficio`,`ec`.`estado` AS `estado_civil`,`eo`.`tipo` AS `trabajo`,`ed`.`tipo` AS `educacion` from (((`PACIENTE` `pc` join `ESTADO_CIVIL` `ec` on((`pc`.`id_estadoc` = `ec`.`id_estadoc`))) join `ESTADO_OCUPACION` `eo` on((`pc`.`id_estado` = `eo`.`id_estado`))) join `EDUCACION` `ed` on((`pc`.`id_educacion` = `ed`.`id_educacion`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_RECURSOS_MUNICIPALES`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_RECURSOS_MUNICIPALES`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_RECURSOS_MUNICIPALES` AS select `RECURSOS_MUNICIPALES`.`id_recursos` AS `id_recursos`,`RECURSOS_MUNICIPALES`.`tipo` AS `tipo` from `RECURSOS_MUNICIPALES` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_REMISION`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_REMISION`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_REMISION` AS select `REMISION`.`id_remision` AS `id_remision`,`REMISION`.`juez` AS `juez` from `REMISION` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_ROLES`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_ROLES`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_ROLES` AS select `ROLES`.`id_rol` AS `id_rol`,`ROLES`.`rol` AS `rol` from `ROLES` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_TERAPEUTA`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_TERAPEUTA`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_TERAPEUTA` AS select `TERAPEUTA`.`id_terapeuta` AS `id_terapeuta`,`TERAPEUTA`.`nombre` AS `nombre` from `TERAPEUTA` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_TIPO_CONDICION`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_TIPO_CONDICION`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_TIPO_CONDICION` AS select `TIPO_CONDICION`.`id_condicion` AS `id_condicion`,`TIPO_CONDICION`.`condicion` AS `condicion` from `TIPO_CONDICION` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_TIPO_VIOLENCIA`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_TIPO_VIOLENCIA`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_TIPO_VIOLENCIA` AS select `TIPO_VIOLENCIA`.`id_tipoviolencia` AS `id_tipoviolencia`,`TIPO_VIOLENCIA`.`tipo` AS `tipo` from `TIPO_VIOLENCIA` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_TRATAMIENTO`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_TRATAMIENTO`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_TRATAMIENTO` AS select `TRATAMIENTO`.`id_tratamiento` AS `id_tratamiento`,`TRATAMIENTO`.`tratamiento` AS `tratamiento` from `TRATAMIENTO` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_UBICACION_VIOLENCIA`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_UBICACION_VIOLENCIA`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_UBICACION_VIOLENCIA` AS select `UBICACION_VIOLENCIA`.`id_uviolencia` AS `id_uviolencia`,`UBICACION_VIOLENCIA`.`ubicacion` AS `ubicacion` from `UBICACION_VIOLENCIA` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VIEW_USUARIO`
--

/*!50001 DROP VIEW IF EXISTS `VIEW_USUARIO`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`caritas`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `VIEW_USUARIO` AS select `usu`.`usuario` AS `usuario`,`usu`.`contraseña` AS `contraseña`,`rl`.`rol` AS `rol` from (`USUARIO` `usu` join `ROLES` `rl` on((`usu`.`id_rol` = `rl`.`id_rol`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-17 22:27:42
