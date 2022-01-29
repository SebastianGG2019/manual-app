

DROP SCHEMA IF EXISTS `mydb` ;

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;


DROP TABLE IF EXISTS `mydb`.`Centro_costos` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Centro_costos` (
  `idCentro_costos` INT NOT NULL,
  `IdPersona` INT NULL,
  `nombre_centro` VARCHAR(45) NULL,
  `direccion_centro_costos` VARCHAR(45) NULL,
  `telefono_centro_costos` VARCHAR(45) NULL,
  `Id_solicitud` INT NULL,
  PRIMARY KEY (`idCentro_costos`),
  CONSTRAINT `FK_CENTROS_COSTOS`
    FOREIGN KEY (`idCentro_costos`)
    REFERENCES `mydb`.`Responsable_Operacion` (`idResponsable_Operacion`);


DROP TABLE IF EXISTS `mydb`.`Items` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Items` (
  `idItems` INT NOT NULL,
  `Nombre` VARCHAR(45) NULL,
  `cantidad_solicitada` VARCHAR(45) NULL,
  `unidad_medida` VARCHAR(45) NULL,
  `valor_unitario` INT NULL,
  `valor_total` INT NULL,
  `codigo_universal` INT NULL,
  `IdSolicitud` INT NULL,
  PRIMARY KEY (`idItems`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `mydb`.`Orden_Compra` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Orden_Compra` (
  `idOrden_Compra` INT NOT NULL,
  `fecha_realizacion` VARCHAR(45) NULL,
  `Id_proovedor` INT NULL,
  `Orden_Compracol` VARCHAR(45) NULL,
  `Total` INT NULL,
  PRIMARY KEY (`idOrden_Compra`),
  INDEX `FK_PROOVEDORES_ORDEN_COMPRA_idx` (`Id_proovedor` ASC) VISIBLE,
  CONSTRAINT `FK_PROOVEDORES_ORDEN_COMPRA`
    FOREIGN KEY (`Id_proovedor`)
    REFERENCES `mydb`.`Proveedores` (`idProveedor`);

DROP TABLE IF EXISTS `mydb`.`Persona` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Persona` (
  `idPersona` INT NOT NULL,
  `Nombre_Persona` VARCHAR(45) NULL,
  `Apelldo_persona` VARCHAR(45) NULL,
  `cedula` INT NULL,
  `correo` VARCHAR(45) NULL,
  `Password` VARCHAR(45) NULL,
  `IdResponsable_Operacion` INT NULL,
  `IdDirecto` INT NULL,
  `Personacol` VARCHAR(45) NULL,
  PRIMARY KEY (`idPersona`),
  INDEX `FK_PERSONA_RESPONSABLE_idx` (`IdResponsable_Operacion` ASC) VISIBLE,
  CONSTRAINT `FK_PERSONA_RESPONSABLE`
    FOREIGN KEY (`IdResponsable_Operacion`)
    REFERENCES `mydb`.`Responsable_Operacion` (`idResponsable_Operacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `mydb`.`Proveedores` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Proveedores` (
  `idProveedor` INT NOT NULL,
  `Nombre_proveedor` VARCHAR(45) NULL,
  `NIT` INT NULL,
  `IdSolicitud` INT NULL,
  `Direccion_Proovedor` VARCHAR(45) NULL,
  `telefono_proveedor` VARCHAR(45) NULL,
  `Ubicacion` VARCHAR(45) NULL,
  PRIMARY KEY (`idProveedor`),
  INDEX `FK_PROVEEDORES_SOLICITUD_idx` (`IdSolicitud` ASC) VISIBLE,
  CONSTRAINT `FK_PROVEEDORES_SOLICITUD`
    FOREIGN KEY (`IdSolicitud`)
    REFERENCES `mydb`.`Solicitud` (`idSolicitud`);

DROP TABLE IF EXISTS `mydb`.`Responsable_Operacion` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Responsable_Operacion` (
  `idResponsable_Operacion` INT NOT NULL,
  `IdPersona` INT NULL,
  `Ext4ension_Telefonica` INT NULL,
  `Id_Centro_costos` INT NULL,
  `Responsable_Operacioncol` VARCHAR(45) NULL,
  PRIMARY KEY (`idResponsable_Operacion`));


DROP TABLE IF EXISTS `mydb`.`Solicitud` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Solicitud` (
  `idSolicitud` INT NOT NULL,
  `Fecha_realizacion` DATE NULL,
  `rubro` INT NULL,
  `id_item` INT NULL,
  `estado` INT NULL,
  `valor_total` INT NULL,
  `Solicitudcol` VARCHAR(45) NULL,
  `IdOrden_Compra` INT NULL,
  `IdCentro_costos` INT NULL,
  `Nombre_reponsable` VARCHAR(45) NULL,
  `Numero_Responsable` INT NULL,
  PRIMARY KEY (`idSolicitud`),
  INDEX `FK_SOLICITUD_CENTRO_idx` (`IdCentro_costos` ASC) VISIBLE,
  INDEX `FK_ITEM_SOLICITUD_idx` (`id_item` ASC) VISIBLE,
  CONSTRAINT `FK_SOLICITUD_CENTRO`
    FOREIGN KEY (`IdCentro_costos`)
    REFERENCES `mydb`.`Centro_costos` (`idCentro_costos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_ITEM_SOLICITUD`
    FOREIGN KEY (`id_item`)
    REFERENCES `mydb`.`Items` (`idItems`);

