# CRIANDO BANCO DE DADOS
CREATE DATABASE IF NOT EXISTS netflix;

# SELECIONAR O BANCO DE DADOS
USE netflix;

# CASO TABELA TENHA CRIADO ERRADO
# DROP TABLE series;
# DROP DATABASE netflix;

# CRIAR TABELA
CREATE TABLE IF NOT EXISTS series (
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) UNIQUE NOT NULL,
    # genero VARCHAR(50) NOT NULL,
    genero ENUM("Terror","Ação","Ficção"),
    nTemporadas TINYINT(2) NOT NULL,
    diretor VARCHAR(30),
    estudio VARCHAR(50) NOT NULL DEFAULT 'Netflix',
    PRIMARY KEY (id)
)DEFAULT CHARSET = utf8;

#INSERT INTO series(id, nome , genero,nTemporadas, diretor,estudio) values (DEFAULT,"Stranger Things","Terror",5,"Irmãos Duffer","Netflix");

#INSERT INTO series(nome,genero,nTemporadas, diretor) VALUES ("Avatar","Ação", 3, "Michael Dante");

#INSERT INTO series VALUES (DEFAULT, "Titãs", "Ação",5,"David Willian",DEFAULT),
#(DEFAULT, "La casa de papel", "Ação",4,"Jesús colmenar",DEFAULT);

SELECT * FROM series;