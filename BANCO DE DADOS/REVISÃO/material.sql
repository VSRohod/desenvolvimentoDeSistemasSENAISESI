CREATE DATABASE IF NOT EXISTS lojaDeDiscosC;

USE lojaDeDiscosC;

CREATE TABLE IF NOT EXISTS discos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    valor DECIMAL(6,2) NOT NULL DEFAULT 0.00,
    artista TINYTEXT NOT NULL,
	quantidade INT NOT NULL DEFAULT 0
);

SELECT * FROM discos;

# INSERT INTO discos VALUES 
# (1,'disco a',100.50,'David',20),
# (2,'disco b',56.00,'Alexandre',15),
# (3,'disco c',10.20,'Lara',5),
# (4,'disco d',80.99,'Victor',100),
# (5,'disco e',73.50,'Bruna',67);

DELETE FROM discos WHERE id = 3;
ALTER TABLE discos RENAME COLUMN valor TO preco;

SELECT * FROM discos;