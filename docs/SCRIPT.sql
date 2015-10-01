SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET latin1 ;
USE `mydb`;

-- -----------------------------------------------------
-- Table `mydb`.`pessoa`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`pessoa` (
  `idPessoa` INT(11) NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(60) NULL DEFAULT NULL ,
  `telefone` VARCHAR(15) NULL DEFAULT NULL ,
  `email` VARCHAR(45) NULL DEFAULT NULL ,
  PRIMARY KEY (`idPessoa`) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`pessoa_fisica`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`pessoa_fisica` (
  `Pessoa_idPessoa` INT(11) NOT NULL ,
  `cpf` VARCHAR(11) NULL DEFAULT NULL ,
  `rg` VARCHAR(8) NULL DEFAULT NULL ,
  PRIMARY KEY (`Pessoa_idPessoa`) ,
  INDEX `fk_Pessoa_Fisica_Pessoa` (`Pessoa_idPessoa` ASC) ,
  CONSTRAINT `fk_Pessoa_Fisica_Pessoa`
    FOREIGN KEY (`Pessoa_idPessoa` )
    REFERENCES `mydb`.`pessoa` (`idPessoa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`cliente`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`cliente` (
  `id_Cliente` INT(11) NOT NULL AUTO_INCREMENT ,
  `pontos` INT(11) NULL DEFAULT NULL ,
  `Pessoa_Fisica_Pessoa_idPessoa` INT(11) NOT NULL ,
  PRIMARY KEY (`id_Cliente`) ,
  INDEX `fk_Cliente_Pessoa_Fisica1` (`Pessoa_Fisica_Pessoa_idPessoa` ASC) ,
  CONSTRAINT `fk_Cliente_Pessoa_Fisica1`
    FOREIGN KEY (`Pessoa_Fisica_Pessoa_idPessoa` )
    REFERENCES `mydb`.`pessoa_fisica` (`Pessoa_idPessoa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`pessoa_juridica`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`pessoa_juridica` (
  `Pessoa_idPessoa` INT(11) NOT NULL AUTO_INCREMENT ,
  `cnpj` VARCHAR(20) NULL DEFAULT NULL ,
  `razaoSocial` VARCHAR(45) NULL DEFAULT NULL ,
  PRIMARY KEY (`Pessoa_idPessoa`) ,
  INDEX `fk_Pessoa_Juridica_Pessoa1` (`Pessoa_idPessoa` ASC) ,
  CONSTRAINT `fk_Pessoa_Juridica_Pessoa1`
    FOREIGN KEY (`Pessoa_idPessoa` )
    REFERENCES `mydb`.`pessoa` (`idPessoa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`fornecedor`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`fornecedor` (
  `idFornecedor` INT(11) NOT NULL AUTO_INCREMENT ,
  `contato` VARCHAR(45) NULL DEFAULT NULL ,
  `Pessoa_Juridica_Pessoa_idPessoa` INT(11) NOT NULL ,
  PRIMARY KEY (`idFornecedor`) ,
  INDEX `fk_Fornecedor_Pessoa_Juridica1` (`Pessoa_Juridica_Pessoa_idPessoa` ASC) ,
  CONSTRAINT `fk_Fornecedor_Pessoa_Juridica1`
    FOREIGN KEY (`Pessoa_Juridica_Pessoa_idPessoa` )
    REFERENCES `mydb`.`pessoa_juridica` (`Pessoa_idPessoa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`funcionario`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`funcionario` (
  `idFuncionario` INT(11) NOT NULL AUTO_INCREMENT ,
  `endereco` VARCHAR(45) NULL DEFAULT NULL ,
  `senha` VARCHAR(8) NULL DEFAULT NULL ,
  `administrador` TINYINT(1) NULL DEFAULT NULL ,
  `Pessoa_Fisica_Pessoa_idPessoa` INT(11) NOT NULL ,
  PRIMARY KEY (`idFuncionario`) ,
  INDEX `fk_Funcionario_Pessoa_Fisica1` (`Pessoa_Fisica_Pessoa_idPessoa` ASC) ,
  CONSTRAINT `fk_Funcionario_Pessoa_Fisica1`
    FOREIGN KEY (`Pessoa_Fisica_Pessoa_idPessoa` )
    REFERENCES `mydb`.`pessoa_fisica` (`Pessoa_idPessoa` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`entrada`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`entrada` (
  `idEntrada` INT(11) NOT NULL AUTO_INCREMENT ,
  `date` DATE NULL DEFAULT NULL ,
  `Funcionario_idFuncionario` INT(11) NOT NULL ,
  `Fornecedor_idFornecedor` INT(11) NOT NULL ,
  PRIMARY KEY (`idEntrada`) ,
  INDEX `fk_Entrada_Funcionario1` (`Funcionario_idFuncionario` ASC) ,
  INDEX `fk_Entrada_Fornecedor1` (`Fornecedor_idFornecedor` ASC) ,
  CONSTRAINT `fk_Entrada_Fornecedor1`
    FOREIGN KEY (`Fornecedor_idFornecedor` )
    REFERENCES `mydb`.`fornecedor` (`idFornecedor` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Entrada_Funcionario1`
    FOREIGN KEY (`Funcionario_idFuncionario` )
    REFERENCES `mydb`.`funcionario` (`idFuncionario` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`produto`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`produto` (
  `idProduto` INT(11) NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(45) NULL DEFAULT NULL ,
  `descricao` VARCHAR(45) NULL DEFAULT NULL ,
  `laboratorio` VARCHAR(45) NULL DEFAULT NULL ,
  `quantidade` INT(11) NULL DEFAULT NULL ,
  `valor_venda` DOUBLE NULL DEFAULT NULL ,
  PRIMARY KEY (`idProduto`) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`item_entrada`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`item_entrada` (
  `Entrada_idEntrada` INT(11) NOT NULL ,
  `Produto_idProduto` INT(11) NOT NULL ,
  `quantidade` INT(11) NULL DEFAULT NULL ,
  `valor_compra` DOUBLE NULL DEFAULT NULL ,
  PRIMARY KEY (`Produto_idProduto`, `Entrada_idEntrada`) ,
  INDEX `fk_Entrada_has_Produto_Entrada1` (`Entrada_idEntrada` ASC) ,
  INDEX `fk_Entrada_has_Produto_Produto1` (`Produto_idProduto` ASC) ,
  CONSTRAINT `fk_Entrada_has_Produto_Entrada1`
    FOREIGN KEY (`Entrada_idEntrada` )
    REFERENCES `mydb`.`entrada` (`idEntrada` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Entrada_has_Produto_Produto1`
    FOREIGN KEY (`Produto_idProduto` )
    REFERENCES `mydb`.`produto` (`idProduto` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`venda`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`venda` (
  `idVenda` INT(11) NOT NULL AUTO_INCREMENT ,
  `date` DATE NULL DEFAULT NULL ,
  `formaPagto` VARCHAR(45) NOT NULL ,
  `desconto` DOUBLE NULL DEFAULT NULL ,
  `Cliente_id_Cliente` INT(11) NOT NULL ,
  `Funcionario_idFuncionario` INT(11) NOT NULL ,
  PRIMARY KEY (`idVenda`) ,
  INDEX `fk_Venda_Cliente1` (`Cliente_id_Cliente` ASC) ,
  INDEX `fk_Venda_Funcionario1` (`Funcionario_idFuncionario` ASC) ,
  CONSTRAINT `fk_Venda_Cliente1`
    FOREIGN KEY (`Cliente_id_Cliente` )
    REFERENCES `mydb`.`cliente` (`id_Cliente` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Venda_Funcionario1`
    FOREIGN KEY (`Funcionario_idFuncionario` )
    REFERENCES `mydb`.`funcionario` (`idFuncionario` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`item_venda`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`item_venda` (
  `idProduto` INT(11) NOT NULL AUTO_INCREMENT ,
  `idVenda` INT(11) NOT NULL ,
  `quantidade` INT(11) NULL DEFAULT NULL ,
  `valor_venda` DOUBLE NULL DEFAULT NULL ,
  PRIMARY KEY (`idProduto`, `idVenda`) ,
  INDEX `fk_Produto_has_Venda_Produto1` (`idProduto` ASC) ,
  INDEX `fk_Produto_has_Venda_Venda1` (`idVenda` ASC) ,
  CONSTRAINT `fk_Produto_has_Venda_Produto1`
    FOREIGN KEY (`idProduto` )
    REFERENCES `mydb`.`produto` (`idProduto` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produto_has_Venda_Venda1`
    FOREIGN KEY (`idVenda` )
    REFERENCES `mydb`.`venda` (`idVenda` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
