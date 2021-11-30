CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;

CREATE TABLE producto (
  id_pro INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom_pro VARCHAR(50) NOT NULL,
  desc_pro VARCHAR(100) NOT NULL,
  cant_pro INT(4)
);
CREATE TABLE IF NOT EXISTS `CAlcaldia` (
  `id_alc` INT NOT NULL,
  `nom_alc` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id_alc`));
CREATE TABLE IF NOT EXISTS `CSexo` (
  `id_sex` INT NOT NULL,
  `sexo` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_sex`));

CREATE TABLE IF NOT EXISTS `MUsuario` (
  `id_usu` INT NOT NULL AUTO_INCREMENT,
  `cor_usu` VARCHAR(64) NOT NULL,
  `nom_usu` VARCHAR(32) NOT NULL,
  `fec_nac` DATE NOT NULL,
  `con_usu` VARCHAR(64) NOT NULL,
  `id_alc` INT NOT NULL,
  `id_sex` INT NOT NULL,
  PRIMARY KEY (`id_usu`),
  INDEX `id_alc_idx` (`id_alc` ASC),
  INDEX `id_sex_idx` (`id_sex` ASC),
  CONSTRAINT `id_alc`
    FOREIGN KEY (`id_alc`)
    REFERENCES `crudnodejsmysql`.`CAlcaldia` (`id_alc`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_sex`
    FOREIGN KEY (`id_sex`)
    REFERENCES `crudnodejsmysql`.`CSexo` (`id_sex`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


insert into calcaldia (id_alc,nom_alc) values( 1 , " Alvaro Obregon " ); insert into calcaldia (id_alc,nom_alc) values( 2 , " Azcapotzalco " ); insert into calcaldia (id_alc,nom_alc) values( 3 , " Benito Juarez " ); insert into calcaldia (id_alc,nom_alc) values( 4 , " Coyoacan " ); insert into calcaldia (id_alc,nom_alc) values( 5 , " Cuajimalpa de Morelos " ); insert into calcaldia (id_alc,nom_alc) values( 6 , " Cuauhtemoc " ); insert into calcaldia (id_alc,nom_alc) values( 7 , " Gustavo A. Madero " ); insert into calcaldia (id_alc,nom_alc) values( 8 , " Iztacalco " ); insert into calcaldia (id_alc,nom_alc) values( 9 , " Iztapalapa " ); insert into calcaldia (id_alc,nom_alc) values( 10 , " Magdalena Contreras " ); insert into calcaldia (id_alc,nom_alc) values( 11 , " Miguel Hidalgo " ); insert into calcaldia (id_alc,nom_alc) values( 12 , " Milpa Alta " ); insert into calcaldia (id_alc,nom_alc) values( 13 , " Tlahuac " ); insert into calcaldia (id_alc,nom_alc) values( 14 , " Tlalpan " ); insert into calcaldia (id_alc,nom_alc) values( 15 , " Venustiano Carranza " ); insert into calcaldia (id_alc,nom_alc) values( 16 , " Xochimilco " );
insert into csexo (id_sex,sexo) values( 1 , " Masculino " ); insert into csexo (id_sex,sexo) values( 2 , " Femenino " ); insert into csexo (id_sex,sexo) values( 3 , " Otro " );
